const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')
const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const fan = require('../../Model/Fan')


async function getInformation(req, res) {
    //Lay du lieu hien tai tren Adafruit chu khong lay tu database

    [isOn, isAuto] = await Promise.all([AdafruitAPI.AdafruitGetFanData(), AdafruitAPI.AdafruitGetAutoFanData()])
    results = {
        name: "Fan",
        isOn: isOn,
        isAuto: isAuto,
    }
    res.status(200).json(results)
};

async function updateState(req, res) {
    obj = {
        isOn : false !== req.body.isOn,
        isAuto : false !== req.body.isAuto,
    }
    
    if (obj.isOn != fan.isOn) {
        AdafruitAPI.AdafruitTurnAutoBulb(obj.isAuto)
        AdafruitAPI.AdafruitTurnFan(obj.isOn)
    }

    if (obj.isAuto != fan.isAuto) {
        AdafruitAPI.AdafruitTurnAutoFan(obj.isAuto)
    }
    
    res.status(200).send("Update state success!")
};

module.exports = {
    getInformation,
    updateState,
}