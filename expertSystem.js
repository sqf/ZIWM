var utils = require("./utils.js");

var limdu = require('limdu');
var inneMatrix = utils.getPatientsMatrix("inne.txt");
var ang_prectMatrix = utils.getPatientsMatrix("ang_prect.txt");
var ang_prct_2Matrix = utils.getPatientsMatrix("ang_prct_2.txt");
var miMatrix = utils.getPatientsMatrix("mi.txt");
var mi_npMatrix = utils.getPatientsMatrix("mi_np.txt");

var transposedInneMatrix = inneMatrix[0].map(function(col, i) {
    return inneMatrix.map(function(row) {
        return parseFloat(row[i])
    })
});

var bigMatrix = JSON.parse(JSON.stringify(inneMatrix));
bigMatrix = utils.mergeMatrix(bigMatrix, ang_prectMatrix);
bigMatrix = utils.mergeMatrix(bigMatrix, ang_prct_2Matrix);
bigMatrix = utils.mergeMatrix(bigMatrix, miMatrix);
bigMatrix = utils.mergeMatrix(bigMatrix, mi_npMatrix);


var MyWinnow = limdu.classifiers.Winnow.bind(0, {retrain_count: 10});

var intentClassifier = new limdu.classifiers.multilabel.BinaryRelevance({
    binaryClassifierType: MyWinnow
});

intentClassifier.trainBatch(
    combineInputAndOutputForClassifier(transposedInneMatrix, "painOfNonHeartOrigin")
);
console.dir(intentClassifier.classify(generateInputForClassifier(transposedInneMatrix[55])));  // ['painOfNonHeartOrigin']

function combineInputAndOutputForClassifier(matrix, diseaseName) {
    var combinedInputsAndOutputs = [];
    matrix.forEach(function(patient) {
        combinedInputsAndOutputs.push({
            input: generateInputForClassifier(patient),
            output: diseaseName
        });
    });
    return combinedInputsAndOutputs;
}

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
