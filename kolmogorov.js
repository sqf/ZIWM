var utils = require("./utils.js");

// Function getPatientsMatrix return two dimension array. First parameter is feature, second is patient.


var inneMatrix = utils.getPatientsMatrix("inne.txt");
var ang_prectMatrix = utils.getPatientsMatrix("ang_prect.txt");
var miMatrix = utils.getPatientsMatrix("mi.txt");
var mi_npMatrix = utils.getPatientsMatrix("mi_np.txt");


var bigMatrix = utils.mergeMatrix(inneMatrix, ang_prectMatrix)
console.log(utils.mergeMatrix(inneMatrix, ang_prectMatrix)[2][230]);
var distributionNumbers = utils.computeDistributionNumbers(bigMatrix[0]);

var probabilityDistribution = utils.computeProbabilityDistribution(distributionNumbers, bigMatrix[0].length);
console.log(probabilityDistribution);
//console.log(getPatientsMatrix("mi.txt")[2][1]);
//console.log(computeDistributionNumbers(patientsMatrix[1]));