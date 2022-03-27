const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

async function getHistory(req, res, id) {
    query = queries.getHistoryQuery()
    results = await database.makeQuery(query)
    console.log("getHistory");
};

module.exports = {
    getHistory,
}