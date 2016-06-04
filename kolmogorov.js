var utils = require("./utils.js");

var inneMatrix = utils.getPatientsMatrix("inne.txt");
var ang_prectMatrix = utils.getPatientsMatrix("ang_prect.txt");
var miMatrix = utils.getPatientsMatrix("mi.txt");
var mi_npMatrix = utils.getPatientsMatrix("mi_np.txt");

var bigMatrix = utils.mergeMatrix(inneMatrix, ang_prectMatrix);
bigMatrix = utils.mergeMatrix(bigMatrix, miMatrix);
bigMatrix = utils.mergeMatrix(bigMatrix, mi_npMatrix);


//console.log(utils.mergeMatrix(inneMatrix, ang_prectMatrix)[2][230]);
console.log(bigMatrix[1]);
var distributionNumbers = utils.computeDistributionNumbers(bigMatrix[1]);

var bigMatrixProbabilityDistribution = utils.computeProbabilityDistribution(distributionNumbers, utils.getNumberOfPatients(bigMatrix));
console.log("bigMatrix[1].length", utils.getNumberOfPatients(bigMatrix));
console.log(bigMatrixProbabilityDistribution);
//console.log(getPatientsMatrix("mi.txt")[2][1]);
//console.log(computeDistributionNumbers(patientsMatrix[1]));