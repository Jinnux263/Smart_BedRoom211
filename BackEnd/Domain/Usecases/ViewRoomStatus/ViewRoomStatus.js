const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(req, res) {
    query = ""
    results = database.makeQuery(query);
    res.send(results)
    console.log("Room: getInformation");
};

module.exports = {
    getInformation
}