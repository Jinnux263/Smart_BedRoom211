const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/query')

function getHistory(req, res, id) {
    query = queries
    results = database.makeQuery(query)
    console.log("getHistory");
};

module.exports = {
    getHistory,
}