var utils = require("./utils.js");
var inneMatrix = utils.getPatientsMatrix("inne.txt");
var ang_prectMatrix = utils.getPatientsMatrix("ang_prect.txt");
var ang_prct_2Matrix = utils.getPatientsMatrix("ang_prct_2.txt");
var miMatrix = utils.getPatientsMatrix("mi.txt");
var mi_npMatrix = utils.getPatientsMatrix("mi_np.txt");

var bigMatrix = JSON.parse(JSON.stringify(inneMatrix));
bigMatrix = utils.mergeMatrix(bigMatrix, ang_prectMatrix);
bigMatrix = utils.mergeMatrix(bigMatrix, miMatrix);
bigMatrix = utils.mergeMatrix(bigMatrix, mi_npMatrix);

var bigMatrixdistributionNumbers = utils.computeDistributionNumbers(bigMatrix[0]);
console.log("inneMatrix.length", inneMatrix.length);

var inneMatrixDistributionNumbersForAllFeatures =  utils.computeDistributionNumbersForAllFeatures(inneMatrix);
var ang_prectMatrixDistributionNumbersForAllFeatures =  utils.computeDistributionNumbersForAllFeatures(ang_prectMatrix)
var ang_prct_2MatrixDistributionNumbersForAllFeatures =  utils.computeDistributionNumbersForAllFeatures(ang_prct_2Matrix)
var miMatrixDistributionNumbersForAllFeatures =  utils.computeDistributionNumbersForAllFeatures(miMatrix)
var mi_npMatrixDistributionNumbersForAllFeatures =  utils.computeDistributionNumbersForAllFeatures(mi_npMatrix)
var bigMatrixDistributionNumbersForAllFeatures =  utils.computeDistributionNumbersForAllFeatures(bigMatrix)

var inneMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(inneMatrixDistributionNumbersForAllFeatures, utils.getNumberOfPatients(inneMatrix));
var ang_prectMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(ang_prectMatrixDistributionNumbersForAllFeatures, utils.getNumberOfPatients(ang_prectMatrix));
var ang_prct_2MatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(ang_prct_2MatrixDistributionNumbersForAllFeatures, utils.getNumberOfPatients(ang_prct_2Matrix));
var miMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(miMatrixDistributionNumbersForAllFeatures, utils.getNumberOfPatients(miMatrix));
var mi_npMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(mi_npMatrixDistributionNumbersForAllFeatures, utils.getNumberOfPatients(mi_npMatrix));
var bigMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(bigMatrixDistributionNumbersForAllFeatures, utils.getNumberOfPatients(bigMatrix));

var probabilityBigMatrixMinusInneMatrix =
    utils.subtractProbabilityDistributionForAllFeatures(bigMatrixProbabilityDistributionForAllFeatures, inneMatrixProbabilityDistributionForAllFeatures);

console.log("probabilityBigMatrixMinusInneMatrix :");
console.log(probabilityBigMatrixMinusInneMatrix);
// console.log("inneMatrixProbabilityDistributionForAllFeatures: ");
// console.log(inneMatrixProbabilityDistributionForAllFeatures);
// console.log("bigMatrix[1].length: ", utils.getNumberOfPatients(bigMatrix));
// console.log("inneMatrix[1].length:", utils.getNumberOfPatients(inneMatrix));
// console.log("ang_prectMatrix[1].length: ", utils.getNumberOfPatients(ang_prectMatrix));
// console.log("miMatrix[1].length: ", utils.getNumberOfPatients(miMatrix));
// console.log("mi_npMatrix[1].length: ", utils.getNumberOfPatients(mi_npMatrix));
//console.log(getPatientsMatrix("mi.txt")[2][1]);
//console.log(computeDistributionNumbers(patientsMatrix[1]));