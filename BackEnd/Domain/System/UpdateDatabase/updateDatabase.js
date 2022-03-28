const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

async function updateDatabase() {

    var [autoFan, autoLed, bulb, DHT11, fan, humidity, infraredSencor, lightSensor] = await getAllDataFromAdaFruit()
    
    
    var current = new Date();
    timeinput = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()} ${current.getHours()}:${current.getMinutes()}`;


    const objFan = newDevice(timeinput, "fan02", 1, 0 )
    const objBulb = newDevice(timeinput, "light02", 1, 0 )
    var objRoom = newRoom(timeinput)


    str1 = `INSERT INTO Room_Data VALUES ('${objRoom.id}', '${timeinput}', ${objRoom.temperature}, ${objRoom.brightness}, ${objRoom.humidity}, ${objRoom.isUsed});`
    str2 = `INSERT INTO Device_Data VALUES ('${objRoom.id}', '${objBulb.name}', '${objBulb.time}', ${objBulb.last_value}, ${objBulb.isOn});`
    str3 = `INSERT INTO Device_Data VALUES ('${objRoom.id}', '${objFan.name}', '${objFan.time}', ${objFan.last_value}, ${objFan.isOn});`
    
    database.makeUpdateQuery(str1)
    database.makeUpdateQuery(str2)
    database.makeUpdateQuery(str3)
}

async function getAllDataFromAdaFruit(){
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

function newRoom(time, id = 'room12', name = "bedroom", temperature = 25, brightness = 100, humidity = 50, isUsed = false){
    return {
        id : id,
        name : name,
        temperature : temperature,
        brightness : brightness,
        humidity : humidity,
        time : time,
        isUsed: isUsed,
    }
}

function newDevice(time, name = "device", id = 0, last_value = 0, isOn = false, isAuto = false){
    return {
        id : id,
        name : name,
        isOn : true,
        isAuto : false,
        last_value : last_value,
        time : time,
    }
}

module.exports = {
    updateDatabase,
    getAllDataFromAdaFruit,
}