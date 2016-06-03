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


console.log(getPatientsMatrix("mi.txt")[2][1]);