const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const room = require('../../Model/Room')
const fan = require('../../Model/Fan')
const bulb = require('../../Model/Bulb')


async function systemInit() {
    // var [autoFan, autoLed, bulb, DHT11, fan, humidity, infraredSencor, lightSensor] = await getAllDataFromAdaFruit()
    fan.isOn = false
    fan.isAuto = false

    bulb.isOn = false
    bulb.isAuto = false
    
    room.temperature = 25
    room.humid = 25
    room.brightness = 25
}

async function getAllDataFromAdaFruit(){
    var res = []
    res.push(AdafruitAPI.AdafruitGetAutoFanData())
    res.push(AdafruitAPI.AdafruitGetAutoLedData())
    res.push(AdafruitAPI.AdafruitGetBulbData())
    res.push(AdafruitAPI.AdafruitGetDHT11SensorData())
    res.push(AdafruitAPI.AdafruitGetFanData())
    res.push(AdafruitAPI.AdafruitGetHumidityData())
    res.push(AdafruitAPI.AdafruitGetInfraredSensorData())
    res.push(AdafruitAPI.AdafruitGetLightSensorData())

    var output = await Promise.all(res)
    return output
}

module.exports = systemInit