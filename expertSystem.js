var utils = require("./utils.js");
var _ = require("underscore");
var brain = require('brain');

var netFromFile = require('./net');
var inneMatrix = utils.getPatientsMatrix("inne.txt");
var ang_prectMatrix = utils.getPatientsMatrix("ang_prect.txt");
var ang_prct_2Matrix = utils.getPatientsMatrix("ang_prct_2.txt");
var miMatrix = utils.getPatientsMatrix("mi.txt");
var mi_npMatrix = utils.getPatientsMatrix("mi_np.txt");

var transposedInneMatrix = utils.transpondMatrix(inneMatrix);
var transponedAng_prectMatrix = utils.transpondMatrix(ang_prectMatrix);
var transposedAng_prct_2Matrix = utils.transpondMatrix(ang_prct_2Matrix);
var transposedMiMatrix = utils.transpondMatrix(miMatrix);
var transposedMi_npMatrix = utils.transpondMatrix(mi_npMatrix);

var net = new brain.NeuralNetwork();

// var inputAndOutputForClassifier = [];
// inputAndOutputForClassifier = inputAndOutputForClassifier.concat(combineInputAndOutputForClassifier(transposedInneMatrix, "Pain of non-heart origin"),
//     combineInputAndOutputForClassifier(transponedAng_prectMatrix, "Angina prectoris"),
//     combineInputAndOutputForClassifier(transposedAng_prct_2Matrix, "Angina prectoris - Prinzmetal variant"),
//     combineInputAndOutputForClassifier(transposedMiMatrix, "Myocardial infraction (transmural)"),
//     combineInputAndOutputForClassifier(transposedMi_npMatrix, "Myocardial infraction (subendocardial)"));

// function combineInputAndOutputForClassifier(matrix, diseaseName) {
//     var combinedInputsAndOutputs = [];
//     matrix.forEach(function(patient) {
//         var combinedInputAndOutput = {};
//         combinedInputAndOutput["input"] = generateInputForClassifier(patient);
//         var output = {};
//         output[diseaseName] = 1;
//         combinedInputAndOutput["output"] = output;
//         combinedInputsAndOutputs.push(combinedInputAndOutput);
//     });
//     return combinedInputsAndOutputs;
// }

// net.train(
//     inputAndOutputForClassifier
// );
// var json = net.toJSON();
// var fs = require('fs');
// fs.writeFile("net.json", JSON.stringify(json), function(err) {
//     if(err) {
//         return console.log(err);
//     }
// });

console.log(net.fromJSON(netFromFile).run(generateInputForClassifier(transposedMi_npMatrix[50]), 4)); // example

function generateInputForClassifier(patient) {

    var inputForClassifier = {};
    inputForClassifier.age = patient[0];
    inputForClassifier.sex = patient[1];
    inputForClassifier.painLocation = patient[2];
    inputForClassifier.chestPainRadiation = patient[3];
    inputForClassifier.painCharacter = patient[4];
    inputForClassifier.onsetOfPain = patient[5];
    inputForClassifier.numberOfHoursSinceOnset = patient[6];
    inputForClassifier.durationOfTheLastEpisode = patient[7];
    inputForClassifier.Nausea = patient[8];
    inputForClassifier.diaphoresis = patient[9];
    inputForClassifier.palpitations = patient[10];
    inputForClassifier.dyspnea = patient[11];
    inputForClassifier.dizzinessOrSyncope = patient[12];
    inputForClassifier.burping = patient[13];
    inputForClassifier.palliativeFactors = patient[14];
    inputForClassifier.priorChestPainOfThisType = patient[15];
    inputForClassifier.physicianConsultedForPriorPain = patient[16];
    inputForClassifier.priorPainRelatedToHeart = patient[17];
    inputForClassifier.priorPainDueToMi = patient[18];
    inputForClassifier.priorPainDueToAnginaPrectoris = patient[19];
    inputForClassifier.priorMi = patient[20];
    inputForClassifier.priorAnginaPrectoris = patient[21];
    inputForClassifier.priorAtypicalChestPain = patient[22];
    inputForClassifier.congestiveHeartFailure = patient[23];
    inputForClassifier.peripheralVascularDisease = patient[24];
    inputForClassifier.hiatalHernia = patient[25];
    inputForClassifier.hypertension = patient[26];
    inputForClassifier.diabetes = patient[27];
    inputForClassifier.smoker = patient[28];
    inputForClassifier.diuretics = patient[29];
    inputForClassifier.nitrates = patient[30];
    inputForClassifier.betaBlockers = patient[31];
    inputForClassifier.digitalis = patient[32];
    inputForClassifier.nonsteroidalAntiInflammatory = patient[33];
    inputForClassifier.antacidsOrH2Blockers = patient[34];
    inputForClassifier.systolicBloodPresure = patient[35];
    inputForClassifier.diastolicBloodPressure = patient[36];
    inputForClassifier.heartRate = patient[37];
    inputForClassifier.respirationRate = patient[38];
    inputForClassifier.rales = patient[39];
    inputForClassifier.cyanosis = patient[40];
    inputForClassifier.pallor = patient[41];
    inputForClassifier.systolicMurmur = patient[42];
    inputForClassifier.diastolicMurmur = patient[43];
    inputForClassifier.oedma = patient[44];
    inputForClassifier.s3Gallop = patient[45];
    inputForClassifier.s4Gallop = patient[46];
    inputForClassifier.chestWallTenderness = patient[47];
    inputForClassifier.diaphoresis2 = patient[48];
    inputForClassifier.newQWave = patient[49];
    inputForClassifier.anyQWave = patient[50];
    inputForClassifier.newStSegmentElevation = patient[51];
    inputForClassifier.anyStSegmentElevation = patient[52];
    inputForClassifier.newStSegmentDepression = patient[53];
    inputForClassifier.anyStSegmentDepression = patient[54];
    inputForClassifier.newTWaveInversion = patient[55];
    inputForClassifier.anyTWaveInversion = patient[56];
    inputForClassifier.newIntraventricularConductionDefect = patient[57];
    inputForClassifier.anyIntraventricularConductionDefect = patient[58];
    return inputForClassifier;
}
