var utils = require("./utils.js");

var limdu = require('limdu');
var inneMatrix = utils.getPatientsMatrix("inne.txt");
var ang_prectMatrix = utils.getPatientsMatrix("ang_prect.txt");
var ang_prct_2Matrix = utils.getPatientsMatrix("ang_prct_2.txt");
var miMatrix = utils.getPatientsMatrix("mi.txt");
var mi_npMatrix = utils.getPatientsMatrix("mi_np.txt");

var inneMatrix2 = inneMatrix[0].map(function(col, i) {
    return inneMatrix.map(function(row) {
        return row[i]
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

intentClassifier.trainBatch([
    {input: {I:1,want:1,an:1,apple:1}, output: "APPLE"},
    {input: {I:1,want:1,a:1,banana:1}, output: "BANANA"},
    {input: {I:1,want:1,chips:1}, output: "CHIPS"}
]);

console.dir(intentClassifier.classify({I:1,want:1,an:1,apple:1,and:1,a:1,banana:1}));  // ['APPLE','BANANA']
console.log(inneMatrix2[0].length);
var janusz;
console.log = generateInput(inneMatrix2[0]);
function generateInput(patient) {

    var input;
    input.age = patient[0];
    input.sex = patient[1];
    input.painLocation = patient[2];
    input.chestPainRadiation = patient[3];
    input.painCharacter = patient[4];
    input.onsetOfPain = patient[5];
    input.numberOfHoursSinceOnset = patient[6];
    input.durationOfTheLastEpisode = patient[7];
    input.Nausea = patient[8];
    input.diaphoresis = patient[9];
    input.palpitations = patient[10];
    input.dyspnea = patient[11];
    input.dizzinessOrSyncope = patient[12];
    input.burping = patient[13];
    input.palliativeFactors = patient[14];
    input.priorChestPainOfThisType = patient[15];
    input.physicianConsultedForPriorPain = patient[16];
    input.priorPainRelatedToHeart = patient[17];
    input.priorPainDueToMi = patient[18];
    input.priorPainDueToAnginaPrectoris = patient[19];
    input.priorMi = patient[20];
    input.priorAnginaPrectoris = patient[21];
    input.priorAtypicalChestPain = patient[22];
    input.congestiveHeartFailure = patient[23];
    input.peripheralVascularDisease = patient[24];
    input.hiatalHernia = patient[25];
    input.hypertension = patient[26];
    input.diabetes = patient[27];
    input.smoker = patient[28];
    input.diuretics = patient[29];
    input.nitrates = patient[30];
    input.betaBlockers = patient[31];
    input.digitalis = patient[32];
    input.nonsteroidalAntiInflammatory = patient[33];
    input.antacidsOrH2Blockers = patient[34];
    input.systolicBloodPresure = patient[35];
    input.diastolicBloodPressure = patient[36];







    //patients[0].input.age = patientsMatrix
}
function generateInputold(patientsMatrix) {
    for(var i = 0; i < patientsMatrix.length; i++) {
        var patient = patientsMatrix[i];
        for(var j = 0; j < patient.length; j++) {
            //console.log(patient[j])
            console.log(j)
        }
    }
    //patients[0].input.age = patientsMatrix
}