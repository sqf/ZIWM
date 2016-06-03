var utils = require("./utils.js");

// Function getPatientsMatrix return two dimension array. First parameter is feature, second is patient.


var patientsMatrix = utils.getPatientsMatrix("mi.txt");



var distributionNumbers = utils.computeDistributionNumbers(patientsMatrix[0]);



var probabilityDistribution = utils.computeProbabilityDistribution(distributionNumbers, patientsMatrix[0].length);
console.log(probabilityDistribution);
//console.log(getPatientsMatrix("mi.txt")[2][1]);
//console.log(computeDistributionNumbers(patientsMatrix[1]));