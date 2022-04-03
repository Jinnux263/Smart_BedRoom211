function getInformation(id = 1) {
    console.log("Bulb: getInformation");
};

function updateState(id = 1) {
    console.log("Bulb: updateState");
};

function turnOffAuto(id = 1) {
    console.log("Bulb: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}