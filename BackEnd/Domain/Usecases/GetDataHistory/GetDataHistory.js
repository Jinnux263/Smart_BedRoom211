const database = require('../../../Data/dataSource/databaseConnect')

function getHistory(req, res, id) {
    query = ""
    results = database.makeQuery(query)
    console.log("getHistory");
};

module.exports = {
    getHistory,
}