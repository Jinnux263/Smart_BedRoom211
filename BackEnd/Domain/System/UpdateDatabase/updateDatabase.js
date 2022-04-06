const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const database = require('../../../Data/dataSource/databaseConnect')
const local_room = require('../../Model/Room')
const local_bulb = require('../../Model/Bulb')
const local_fan = require('../../Model/Fan')

async function updateDatabase() {

    var [autoFan, autoLed, bulb, DHT11, fan, humidity, infraredSencor, lightSensor] = await getAllDataFromAdaFruit()


    var current = new Date();
    timeinput = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()} ${current.getHours()}:${current.getMinutes()}`;


    const objFan = newDevice(timeinput, "fan02", fan, autoFan)
    const objBulb = newDevice(timeinput, "bulb02", bulb, autoLed)
    var objRoom = newRoom(timeinput, 'room12', 'bedroom', DHT11, lightSensor, humidity, infraredSencor)

    str1 = `INSERT INTO Room_Data VALUES ('${objRoom.id}', '${objRoom.time}', ${objRoom.temperature}, ${objRoom.brightness}, ${objRoom.humidity}, ${objRoom.isUsed});`
    str2 = `INSERT INTO Device_Data VALUES ('${objRoom.id}', '${objBulb.name}', '${objBulb.time}', ${objBulb.isOn}, ${objBulb.isAuto});`
    str3 = `INSERT INTO Device_Data VALUES ('${objRoom.id}', '${objFan.name}', '${objFan.time}', ${objFan.isOn}, ${objFan.isAuto});`

    database.makeUpdateQuery(str1)
    database.makeUpdateQuery(str2)
    database.makeUpdateQuery(str3)
}

async function getAllDataFromAdaFruit() {
    var res = []
    res.push(AdafruitAPI.AdafruitGetAutoFanData())
    res.push(AdafruitAPI.AdafruitGetAutoBulbData())
    res.push(AdafruitAPI.AdafruitGetBulbData())
    res.push(AdafruitAPI.AdafruitGetDHT11SensorData())
    res.push(AdafruitAPI.AdafruitGetFanData())
    res.push(AdafruitAPI.AdafruitGetHumidityData())
    res.push(AdafruitAPI.AdafruitGetInfraredSensorData())
    res.push(AdafruitAPI.AdafruitGetLightSensorData())

    var output = await Promise.all(res)
    return output
}

function newRoom(time, id = 'room12', name = "bedroom", temperature = 25, brightness = 100, humidity = 50, isUsed = false) {
    return {
        id: id,
        name: name,
        temperature: temperature,
        brightness: brightness,
        humidity: humidity,
        time: time,
        isUsed: isUsed,
    }
}

function newDevice(time, name = "device", isOn = false, isAuto = false) {
    return {
        name: name,
        isOn: isOn,
        isAuto: isAuto,
        time: time,
    }
}

module.exports = {
    updateDatabase,
    getAllDataFromAdaFruit,
}