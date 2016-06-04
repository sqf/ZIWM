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

exports.subtractProbabilityDistributionForAllFeatures = function(probabilityDistribution1, probabilityDistribution2) {
    return _.mapObject(probabilityDistribution1, function(val, key) {
        return _.mapObject(val, function(val2, key2) {
            // console.log("val2: ", val2);
            // console.log("probabilityDistribution2[key][key2]", probabilityDistribution2[key][key2]);
            // console.log("subtr: val2 - probabilityDistribution2[key][key2]", val2 - probabilityDistribution2[key][key2]);
            return Math.abs(val2 - probabilityDistribution2[key][key2]);
        });
    });
}

exports.sumProbabilitiesInEachFeature = function(probabilityObject) {

var sumedProbabilityObject = [];

    function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
            if( obj.hasOwnProperty( el ) && !isNaN(parseFloat( obj[el] ))) {
                sum += parseFloat( obj[el] );
            }
        }
        return sum;
    }

    for(var i = 0; i < Object.keys(probabilityObject).length; i++) {
        var probabilityObjectKV = probabilityObject[i];
        for (var key in probabilityObjectKV){
            if (probabilityObjectKV.hasOwnProperty(key) && !isNaN(probabilityObjectKV[key])) {
                sumedProbabilityObject[i] = sum(probabilityObjectKV);
            }
        }
    }
    return sumedProbabilityObject;
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