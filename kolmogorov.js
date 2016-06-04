var utils = require("./utils.js");
var inneMatrix = utils.getPatientsMatrix("inne.txt");
var ang_prectMatrix = utils.getPatientsMatrix("ang_prect.txt");
var miMatrix = utils.getPatientsMatrix("mi.txt");
var mi_npMatrix = utils.getPatientsMatrix("mi_np.txt");

var bigMatrix = JSON.parse(JSON.stringify(inneMatrix));
bigMatrix = utils.mergeMatrix(bigMatrix, ang_prectMatrix);
bigMatrix = utils.mergeMatrix(bigMatrix, miMatrix);
bigMatrix = utils.mergeMatrix(bigMatrix, mi_npMatrix);


//console.log(utils.mergeMatrix(inneMatrix, ang_prectMatrix)[2][230]);
//console.log(bigMatrix[1]);
var bigMatrixdistributionNumbers = utils.computeDistributionNumbers(bigMatrix[0]);
console.log("inneMatrix.length", inneMatrix.length);

var inneMatrixDistributionNumbersForAllFeatures =  utils.computeDistributionNumbersForAllFeatures(inneMatrix)
console.log("inneMatrixDistributionNumbersForAllFeatures");
console.log(inneMatrixDistributionNumbersForAllFeatures.length);

var inneMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(inneMatrixDistributionNumbersForAllFeatures, utils.getNumberOfPatients(inneMatrix));

console.log("inneMatrixProbabilityDistributionForAllFeatures");
console.log(inneMatrixProbabilityDistributionForAllFeatures);
var bigMatrixProbabilityDistribution = utils.computeProbabilityDistribution(bigMatrixdistributionNumbers, utils.getNumberOfPatients(bigMatrix));
console.log("bigMatrix[1].length: ", utils.getNumberOfPatients(bigMatrix));
console.log("inneMatrix[1].length:", utils.getNumberOfPatients(inneMatrix));
console.log("ang_prectMatrix[1].length: ", utils.getNumberOfPatients(ang_prectMatrix));
console.log("miMatrix[1].length: ", utils.getNumberOfPatients(miMatrix));
console.log("mi_npMatrix[1].length: ", utils.getNumberOfPatients(mi_npMatrix));
console.log(bigMatrixProbabilityDistribution);
//console.log(getPatientsMatrix("mi.txt")[2][1]);
//console.log(computeDistributionNumbers(patientsMatrix[1]));