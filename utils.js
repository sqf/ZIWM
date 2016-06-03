var fs = require("fs");
var exports = module.exports = {};

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

exports.computeDistributionNumbers = function(featureArray) {
    return featureArray.reduce(function(result, item) {
        result[item] || (result[item] = 0);
        result[item]++;
        return result;
    }, {});
}

exports.computeProbabilityDistribution = function(distributionNumbers, numberOfPatients) {
    var probabilityDistribution = {};
    for (var feature in distributionNumbers) {
        probabilityDistribution[feature] = distributionNumbers[feature] / numberOfPatients;
    }
    return probabilityDistribution;
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