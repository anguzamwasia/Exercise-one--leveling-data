// Data as provided in the problem statement
const surveyData = [
    { backSight: "1.332", intermediate: "", foresight: "", rise: "", fall: "", reducedLevel: "100", distance: "0 + 000", remarks: "TBM" },
    { backSight: "", intermediate: "1.31", foresight: "", rise: "0.022", fall: "", reducedLevel: "100.022", distance: "0 + 010", remarks: "" },
    { backSight: "", intermediate: "1.375", foresight: "", rise: "", fall: "0.065", reducedLevel: "99.957", distance: "0 + 020", remarks: "" },
    { backSight: "1.125", intermediate: "", foresight: "1.425", rise: "", fall: "0.05", reducedLevel: "99.907", distance: "0 + 030", remarks: "CP" },
    { backSight: "", intermediate: "1.132", foresight: "", rise: "", fall: "0.007", reducedLevel: "99.9", distance: "0 + 040", remarks: "" },
    { backSight: "1.302", intermediate: "", foresight: "1.259", rise: "", fall: "0.127", reducedLevel: "99.773", distance: "0 + 050", remarks: "CP" },
    { backSight: "", intermediate: "1.225", foresight: "", rise: "0.077", fall: "", reducedLevel: "99.85", distance: "0 + 060", remarks: "" },
    { backSight: "", intermediate: "1.334", foresight: "", rise: "", fall: "0.109", reducedLevel: "99.741", distance: "0 + 070", remarks: "" },
    { backSight: "", intermediate: "1.408", foresight: "", rise: "", fall: "0.074", reducedLevel: "99.667", distance: "0 + 080", remarks: "" },
    { backSight: "", intermediate: "1.48", foresight: "", rise: "", fall: "0.072", reducedLevel: "99.595", distance: "0 + 090", remarks: "" },
    { backSight: "", intermediate: "1.54", foresight: "", rise: "", fall: "0.06", reducedLevel: "99.535", distance: "0 + 100", remarks: "" },
    { backSight: "1.535", intermediate: "", foresight: "1.603", rise: "", fall: "0.063", reducedLevel: "99.472", distance: "0 + 110", remarks: "CP" },
    { backSight: "", intermediate: "1.475", foresight: "", rise: "0.06", fall: "", reducedLevel: "99.532", distance: "0 + 100", remarks: "" },
    { backSight: "", intermediate: "1.412", foresight: "", rise: "0.063", fall: "", reducedLevel: "99.595", distance: "0 + 090", remarks: "" },
    { backSight: "", intermediate: "1.341", foresight: "", rise: "0.071", fall: "", reducedLevel: "99.666", distance: "0 + 080", remarks: "" },
    { backSight: "", intermediate: "1.265", foresight: "", rise: "0.076", fall: "", reducedLevel: "99.742", distance: "0 + 070", remarks: "" },
    { backSight: "1.22", intermediate: "", foresight: "1.255", rise: "0.01", fall: "", reducedLevel: "99.752", distance: "0 + 060", remarks: "CP" },
    { backSight: "", intermediate: "1.25", foresight: "", rise: "", fall: "0.03", reducedLevel: "99.722", distance: "0 + 050", remarks: "" },
    { backSight: "1.31", intermediate: "", foresight: "1.138", rise: "0.112", fall: "", reducedLevel: "99.834", distance: "0 + 040", remarks: "CP" },
    { backSight: "", intermediate: "1.238", foresight: "", rise: "0.072", fall: "", reducedLevel: "99.906", distance: "0 + 030", remarks: "" },
    { backSight: "", intermediate: "1.182", foresight: "", rise: "0.056", fall: "", reducedLevel: "99.962", distance: "0 + 020", remarks: "" },
    { backSight: "", intermediate: "1.118", foresight: "", rise: "0.064", fall: "", reducedLevel: "100.026", distance: "0 + 010", remarks: "" },
    { backSight: "", intermediate: "", foresight: "1.145", rise: "0.027", fall: "", reducedLevel: "99.999", distance: "0 + 000", remarks: "" },
];

// Function to load the survey data into the table
function loadSurveyData() {
    const tableBody = document.getElementById('surveyTable').getElementsByTagName('tbody')[0];
    surveyData.forEach(row => {
        const newRow = tableBody.insertRow();
        Object.values(row).forEach(cellValue => {
            const newCell = newRow.insertCell();
            const cellText = document.createTextNode(cellValue);
            newCell.appendChild(cellText);
        });
    });
}

// Call the function to load data when the document is ready
document.addEventListener("DOMContentLoaded", loadSurveyData);
