const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const room = require('../../Model/Room')
const fan = require('../../Model/Fan')
const bulb = require('../../Model/Bulb')
const { getAllDataFromAdaFruit } = require('../UpdateDatabase/updateDatabase')

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


module.exports = systemInit