const database = require('../../../Data/dataSource/databaseConnect')
const { getAllDataFromAdaFruit } = require('../../System/UpdateDatabase/updateDatabase')

async function getInformation(req, res) {
    // Lay thong tin hien tai cua phong

    // var [autoFan, autoLed, bulb, DHT11, fan, humidity, infraredSencor, lightSensor] = await getAllDataFromAdaFruit()
    id = 0;
    results = await database.makeQuery(query);
    res.status(200).send(results)
    console.log("Room: getInformation");
};

module.exports = {
    getInformation
}