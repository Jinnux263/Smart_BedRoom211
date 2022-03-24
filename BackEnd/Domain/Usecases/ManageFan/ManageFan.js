const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(req, res, id = 0) {
    query = ""
    results = database.makeQuery(query);
    console.log("Fan: getInformation");
};

function updateState(req, res, id = 0) {
    query = ""
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