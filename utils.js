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