const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')
const bulb = require('../../Model/Bulb')


async function getInformation(req, res, id = 1) {
    query = queries.bulb_getInformation()
    results = await database.makeQuery(query);
    res.status(200).json(results)

    console.log("Bulb: getInformation");
};

async function updateState(req, res, id = 1) {
    query = queries.bulb_updateState()
    results = await database.makeQuery(query);
    console.log("Bulb: updateState");
    res.status(200).send(results)
};

async function turnOffAuto(req, res, id = 1) {
    console.log("Bulb: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}