const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

async function getHistory(req, res, id) {
    try {
        query = queries.getHistoryQuery()
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