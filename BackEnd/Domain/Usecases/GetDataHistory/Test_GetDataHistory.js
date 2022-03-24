const database = require('../../../Data/dataSource/databaseConnect')

function getHistory(req, res, id) {
    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
    
    console.log("getHistory");
};

module.exports = {
    getHistory,
}