const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(req, res, id = 0) {
    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
    console.log("Fan: getInformation");
};

function updateState(req, res, id = 0) {
    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
    console.log("Fan: updateState");
};

function turnOffAuto(req, res, id = 0) {
    console.log("Fan: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}