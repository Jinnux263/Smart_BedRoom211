const database = require('../../../Data/dataSource/databaseConnect')

function getInformation(req, res) {
    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
    console.log("Room: getInformation");
};

module.exports = {
    getInformation
}