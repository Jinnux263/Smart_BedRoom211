const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(req, res, id = 0) {
    results = {
        isOn : true,
        isAuto : true,
    }
    res.send(results)
};

function updateState(req, res, id = 0) {
    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
};

function turnOffAuto(req, res, id = 0) {
    console.log("Fan: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}