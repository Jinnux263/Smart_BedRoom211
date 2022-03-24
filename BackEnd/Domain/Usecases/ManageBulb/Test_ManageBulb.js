const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(req, res, id = 1) {
    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
    console.log("Bulb: getInformation");
};

function updateState(req, res, id = 1) {
    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
    console.log("Bulb: updateState");
};

function turnOffAuto(req, res, id = 1) {
    console.log("Bulb: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}