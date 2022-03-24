const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(req, res, id = 1) {
    query = ""
    results = database.makeQuery(query);
    console.log("Bulb: getInformation");
};

function updateState(req, res, id = 1) {
    query = ""
    results = database.makeQuery(query);
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