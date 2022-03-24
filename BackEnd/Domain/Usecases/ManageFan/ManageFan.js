function getInformation(id = 0) {
    console.log("Fan: getInformation");
};

function updateState(id = 0) {
    console.log("Fan: updateState");
};

function turnOffAuto(id = 0) {
    console.log("Fan: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}