var fs = require("fs");
var exports = module.exports = {};
var _ = require("underscore");
// Function getPatientsMatrix return two dimension array. First parameter is feature, second is patient.
exports.getPatientsMatrix = function(filePath) {
    var data = fs.readFileSync(filePath).toString();
    data = data.split(/\r?\n/);
    var matrix = [];
    for(var i = 0; i < data.length; i++) {
        matrix[i] = data[i].split(/[\t]+/);
        for(var j = 0; j < i; j++) {
            matrix[i, j] = matrix[j];
        }
    }
    return matrix;
}

function computeDistributionNumbers(featureArray) {
    return featureArray.reduce(function (result, item) {
        result[item] || (result[item] = 0);
        result[item]++;
        return result;
    }, {});
}

exports.computeDistributionNumbersForAllFeatures = function(matrix) {
    var distributionNumbersForAllFeatures = {};
    for (var i = 0; i < matrix.length; i++) {
        distributionNumbersForAllFeatures[i] = computeDistributionNumbers(matrix[i]);
    }
    return distributionNumbersForAllFeatures;
}

exports.computeProbabilityDistributionForAllFeatures = function(distributionNumbers, numberOfPatients) {
    return _.mapObject(distributionNumbers, function(val, key) {
        return _.mapObject(val, function(val, key) {
            return val / numberOfPatients;
        });
    });
}

function computeProbabilityDistribution(distributionNumbers, numberOfPatients) {
    var probabilityDistribution = {};
    for (var patient in distributionNumbers) {
        probabilityDistribution[patient] = distributionNumbers[patient] / numberOfPatients;
    }
    return probabilityDistribution;
}

exports.getNumberOfPatients = function(matrix) {
    return matrix[0].length;
}

exports.mergeMatrix = function(array1, array2) {
    var length1 = array1[0].length;
    var length2 = array2[0].length;
    var mergedArray = array1;

    for(var i = 0; i < array2.length; i++) {
        for(var j = 0; j < length2; j++) {
            mergedArray[i][length1 + j] = array2[i][j];
        }
    }
    return mergedArray;
}

exports.computeDistributionNumbers = computeDistributionNumbers;
exports.computeProbabilityDistribution = computeProbabilityDistribution;