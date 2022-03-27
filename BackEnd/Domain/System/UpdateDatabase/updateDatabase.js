const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

async function updateDatabase() {
    var res = []
    res.push(AdafruitAPI.AdafruitGetAutoFanData())
    res.push(AdafruitAPI.AdafruitGetAutoLedData())
    res.push(AdafruitAPI.AdafruitGetBulbData())
    res.push(AdafruitAPI.AdafruitGetDHT11SensorData())
    res.push(AdafruitAPI.AdafruitGetFanData())
    res.push(AdafruitAPI.AdafruitGetHumidityData())
    res.push(AdafruitAPI.AdafruitGetInfraredSensorData())
    res.push(AdafruitAPI.AdafruitGetLightSensorData())

    var [autoFan, autoLed, bulb, DHT11, fan, humidity, infraredSencor, lightSensor] = await Promise.all(res)


    // Cap nhat du lieu vao Database o day
    // database.makeQuery("")

    
    console.log(autoFan)
    // console.log(autoLed.name)
    // console.log(bulb.name)
    // console.log(DHT11.name)
    // console.log(fan.name)
    // console.log(humidity.name)
    // console.log(infraredSencor.name)
    // console.log(lightSensor.name)
}

module.exports = {
    updateDatabase,
}