const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')
const fan = require('../../Model/Fan')

function getInformation(req, res, id = 0) {
    query = queries.bulb_getInformation()
    results = database.makeQuery(query);
    res.status(200).json(results)

    console.log("Bulb: getInformation");
};

function updateState(req, res, id = 0) {
    query = queries.bulb_updateState()
    results = database.makeQuery(query);
    console.log("Bulb: updateState");
};

function turnOffAuto(req, res, id = 0) {
    console.log("Bulb: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}