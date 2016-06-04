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

var innePartOfKolmogorovScore = utils.computePartOfKolmogorovScore(sumOfProbabilityBigMatrixMinusInneMatrix, probabilityOfInne);
var ang_prectPartOfKolmogorovScore = utils.computePartOfKolmogorovScore(sumOfProbabilityBigMatrixMinusAng_prectMatrix, probabilityOfAng_prect);
var ang_prct_2Matrix_prectPartOfKolmogorovScore = utils.computePartOfKolmogorovScore(sumOfProbabilityBigMatrixMinusAng_prct_2Matrix, probabilityOfAng_prct_2);
var miMatrixPartOfKolmogorovScore = utils.computePartOfKolmogorovScore(sumOfProbabilityBigMatrixMinusMiMatrix, probabilityOfMi);
var mi_npPartOfKolmogorovScore = utils.computePartOfKolmogorovScore(sumOfProbabilityBigMatrixMinusMi_npMatrix, probabilityOfMi_np);

var kolmogorovScoreList = JSON.parse(JSON.stringify(innePartOfKolmogorovScore));
kolmogorovScoreList = utils.sumArrays(kolmogorovScoreList, ang_prectPartOfKolmogorovScore);
kolmogorovScoreList = utils.sumArrays(kolmogorovScoreList, ang_prct_2Matrix_prectPartOfKolmogorovScore);
kolmogorovScoreList = utils.sumArrays(kolmogorovScoreList, miMatrixPartOfKolmogorovScore);
kolmogorovScoreList = utils.sumArrays(kolmogorovScoreList, mi_npPartOfKolmogorovScore);

console.log("kolmogorovScoreList:")
console.log(kolmogorovScoreList)