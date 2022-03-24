const database = require('../../../Data/dataSource/databaseConnect')

function getHistory(id) {
    query = ""
    results = database.makeQuery(query)
    console.log("getHistory");
};

module.exports = {
    getHistory,
}