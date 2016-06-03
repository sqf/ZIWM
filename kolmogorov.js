var fs = require('fs');

// Function getPatientsMatrix return two dimension array. First parameter is feature, second is patient.
function getPatientsMatrix(filePath) {
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

var patientsMatrix = getPatientsMatrix("mi.txt");

function computeDistributionNumbers(featureArray) {
    return featureArray.reduce(function(result, item) {
        result[item] || (result[item] = 0);
        result[item]++;
        return result;
    }, {});
}

function computeDistributionProbability() {
    
}

//console.log(getPatientsMatrix("mi.txt")[2][1]);
console.log(computeDistributionNumbers(patientsMatrix[0]));