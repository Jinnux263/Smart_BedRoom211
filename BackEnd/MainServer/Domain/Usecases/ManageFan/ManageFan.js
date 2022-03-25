const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

function getInformation(req, res, id = 0) {
    query = queries.fan_getInformation()
    results = database.makeQuery(query);
    console.log("Fan: getInformation");
};

function updateState(req, res, id = 0) {
    query = queries.fan_updateState()
    results = database.makeQuery(query);
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