const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

async function getHistory(req, res, id) {
    var query = "select * from device_data";
    
    inp = 'room12'
    if (id == "room12") {
        query = queries.getRoomHistoryQuery(inp)
    } else if (id == "light02") {
        query = queries.bulb_getInformation(inp)
    } else if (id == "fan02") {
        query = queries.fan_getInformation(inp)
    }
    // query = `call get_data_of_bulb('room12');`
    // console.log(query)
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