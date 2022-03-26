const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')
const room = require('../../Model/Room')

function getInformation(req, res) {
    id = 0;
    query = queries.room_getInformation()
    results = database.makeQuery(query);
    res.send(results)
    console.log("Room: getInformation");
};

module.exports = {
    getInformation
}