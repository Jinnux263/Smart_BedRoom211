const database = require('../../../Data/dataSource/databaseConnect')
const { getAllDataFromAdaFruit } = require('../../System/UpdateDatabase/updateDatabase')

async function getInformation(req, res) {
    // Lay thong tin hien tai cua phong
    try {
        const [autoFan, autoLed, bulb, DHT11, fan, humidity, infraredSencor, lightSensor] = await getAllDataFromAdaFruit()
        results = {
            humidity : humidity,
            brightness : lightSensor,
            hasHuman: infraredSencor,
            temperature: DHT11,
        }
        res.status(200).send(results)

    } catch (err) {
        console.log('ERROR => ' + "err");
        res.send(err)
    }
};

module.exports = {
    getInformation
}