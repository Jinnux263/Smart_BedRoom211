const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

async function getHistory(req, res, id) {
    if (id == "") {
        query = queries.getRoomHistoryQuery(id)
    } else if (id == "") {
        query = queries.bulb_getInformation(id)
    } else if (id == "") {
        query = queries.fan_getInformation(id)
    }

    try {
        results = await database.makeQuery(query)
        res.status(200).send(results)
    } catch (err) {
        console.log('ERROR => ' + err);
        res.send(err)
    }
};

module.exports = {
    getHistory,
}