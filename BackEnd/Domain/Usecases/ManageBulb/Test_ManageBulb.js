const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(id = 1) {
    query = ""
    results = database.makeQuery(query);
    console.log("Bulb: getInformation");
};

function updateState(id = 1) {
    query = ""
    results = database.makeQuery(query);
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