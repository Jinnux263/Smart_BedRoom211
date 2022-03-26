const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')
const device = require('../../Model/Device')
const room = require('../../Model/Room')

async function getHistory(req, res, id) {
    query = queries
    results = await database.makeQuery(query)
    console.log("getHistory");
};

module.exports = {
    getHistory,
}