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

var numberOfPatientsWithInne = utils.getNumberOfPatients(inneMatrix);
var numberOfPatientsWithAng_prect = utils.getNumberOfPatients(ang_prectMatrix);
var numberOfPatientsWithAng_prct_2 = utils.getNumberOfPatients(ang_prct_2Matrix);
var numberOfPatientsWithMi = utils.getNumberOfPatients(miMatrix);
var numberOfPatientsWithMi_np = utils.getNumberOfPatients(mi_npMatrix);
var numberOfAllPatients = utils.getNumberOfPatients(bigMatrix)

var probabilityOfInne = numberOfPatientsWithInne / numberOfAllPatients;
var probabilityOfAng_prect = numberOfPatientsWithAng_prect / numberOfAllPatients;
var probabilityOfAng_prct_2 = numberOfPatientsWithAng_prct_2 / numberOfAllPatients;
var probabilityOfMi = numberOfPatientsWithMi / numberOfAllPatients;
var probabilityOfMi_np = numberOfPatientsWithMi_np / numberOfAllPatients;

var inneMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(inneMatrixDistributionNumbersForAllFeatures, numberOfPatientsWithInne);
var ang_prectMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(ang_prectMatrixDistributionNumbersForAllFeatures, numberOfPatientsWithAng_prect);
var ang_prct_2MatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(ang_prct_2MatrixDistributionNumbersForAllFeatures, numberOfPatientsWithAng_prct_2);
var miMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(miMatrixDistributionNumbersForAllFeatures, numberOfPatientsWithMi);
var mi_npMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(mi_npMatrixDistributionNumbersForAllFeatures, numberOfPatientsWithMi_np);
var bigMatrixProbabilityDistributionForAllFeatures =
    utils.computeProbabilityDistributionForAllFeatures(bigMatrixDistributionNumbersForAllFeatures, numberOfAllPatients);

var probabilityBigMatrixMinusInneMatrix =
    utils.subtractProbabilityDistributionForAllFeatures(bigMatrixProbabilityDistributionForAllFeatures, inneMatrixProbabilityDistributionForAllFeatures);
var probabilityBigMatrixMinusAng_prectMatrix =
    utils.subtractProbabilityDistributionForAllFeatures(bigMatrixProbabilityDistributionForAllFeatures, ang_prectMatrixProbabilityDistributionForAllFeatures);
var probabilityBigMatrixMinusAng_prct_2Matrix =
    utils.subtractProbabilityDistributionForAllFeatures(bigMatrixProbabilityDistributionForAllFeatures, ang_prct_2MatrixProbabilityDistributionForAllFeatures);
var probabilityBigMatrixMinusMiMatrix =
    utils.subtractProbabilityDistributionForAllFeatures(bigMatrixProbabilityDistributionForAllFeatures, miMatrixProbabilityDistributionForAllFeatures);
var probabilityBigMatrixMinusMi_npMatrix =
    utils.subtractProbabilityDistributionForAllFeatures(bigMatrixProbabilityDistributionForAllFeatures, mi_npMatrixProbabilityDistributionForAllFeatures);

var sumOfProbabilityBigMatrixMinusInneMatrix = utils.sumProbabilitiesInEachFeature(probabilityBigMatrixMinusInneMatrix);
var sumOfProbabilityBigMatrixMinusAng_prectMatrix = utils.sumProbabilitiesInEachFeature(probabilityBigMatrixMinusAng_prectMatrix);
var sumOfProbabilityBigMatrixMinusAng_prct_2Matrix = utils.sumProbabilitiesInEachFeature(probabilityBigMatrixMinusAng_prct_2Matrix);
var sumOfProbabilityBigMatrixMinusMiMatrix = utils.sumProbabilitiesInEachFeature(probabilityBigMatrixMinusMiMatrix);
var sumOfProbabilityBigMatrixMinusMi_npMatrix = utils.sumProbabilitiesInEachFeature(probabilityBigMatrixMinusMi_npMatrix);

console.log("sumOfProbabilityBigMatrixMinusInneMatrix");
console.log(sumOfProbabilityBigMatrixMinusInneMatrix);
console.log("sumOfProbabilityBigMatrixMinusAng_prectMatrix");
console.log(sumOfProbabilityBigMatrixMinusAng_prectMatrix);
console.log("sumOfProbabilityBigMatrixMinusAng_prct_2Matrix");
console.log(sumOfProbabilityBigMatrixMinusAng_prct_2Matrix);
console.log("sumOfProbabilityBigMatrixMinusMiMatrix");
console.log(sumOfProbabilityBigMatrixMinusMiMatrix);
console.log("sumOfProbabilityBigMatrixMinusMi_npMatrix");
console.log(sumOfProbabilityBigMatrixMinusMi_npMatrix);

console.log("probabilityBigMatrixMinusInneMatrix[38] :");
console.log(probabilityBigMatrixMinusInneMatrix[38][10]);
console.log("probabilityBigMatrixMinusInneMatrix[39] :");
console.log(probabilityBigMatrixMinusInneMatrix[39][0]);
// console.log("inneMatrixProbabilityDistributionForAllFeatures: ");
// console.log(inneMatrixProbabilityDistributionForAllFeatures);
// console.log("bigMatrix[1].length: ", utils.getNumberOfPatients(bigMatrix));
console.log("utils.getNumberOfPatients(ang_prectMatrix):", utils.getNumberOfPatients(ang_prectMatrix));
// console.log("ang_prectMatrix[1].length: ", utils.getNumberOfPatients(ang_prectMatrix));
// console.log("miMatrix[1].length: ", utils.getNumberOfPatients(miMatrix));
// console.log("mi_npMatrix[1].length: ", utils.getNumberOfPatients(mi_npMatrix));
//console.log(getPatientsMatrix("mi.txt")[2][1]);
//console.log(computeDistributionNumbers(patientsMatrix[1]));