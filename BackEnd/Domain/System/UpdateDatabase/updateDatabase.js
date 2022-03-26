const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

async function updateDatabase() {

    const autoFan = await AdafruitAPI.AdafruitGetAutoFanData()
    console.log(autoFan.name)

    const autoLed = await AdafruitAPI.AdafruitGetAutoLedData()
    console.log(autoLed.name)

    const bulb = await AdafruitAPI.AdafruitGetBulbData()
    console.log(bulb.name)

    const DHT11 = await AdafruitAPI.AdafruitGetDHT11SensorData()
    console.log(DHT11.name)

    const fan = await AdafruitAPI.AdafruitGetFanData()
    console.log(fan.name)

    const humidity = await AdafruitAPI.AdafruitGetHumidityData()
    console.log(humidity.name)

    const infraredSencor = await AdafruitAPI.AdafruitGetInfraredSensorData()
    console.log(infraredSencor.name)

    const lightSensor = await AdafruitAPI.AdafruitGetLightSensorData()
    console.log(lightSensor.name)


}

module.exports = {
    updateDatabase,
}