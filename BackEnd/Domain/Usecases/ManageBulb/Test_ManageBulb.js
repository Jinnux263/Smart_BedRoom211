const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(req, res, id = 1) {
    results = {
        isOn : true,
        isAuto : true,
    }
    res.status(200).json(results)
};

function updateState(req, res, id = 1) {
    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
};

function turnOffAuto(req, res, id = 1) {
    console.log("Bulb: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}