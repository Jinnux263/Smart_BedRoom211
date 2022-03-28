const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')
const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const bulb = require('../../Model/Bulb')


async function getInformation(req, res) {
    //Lay du lieu hien tai tren Adafruit chu khong lay tu database

    [isOn, isAuto] = await Promise.all([AdafruitAPI.AdafruitGetBulbData(), AdafruitAPI.AdafruitGetAutoBulbData()])
    results = {
        name: "Bulb",
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
    
    if (obj.isOn != bulb.isOn) {
        AdafruitAPI.AdafruitTurnAutoBulb(obj.isAuto)
        AdafruitAPI.AdafruitTurnBulb(obj.isOn)
    }

    if (obj.isAuto != bulb.isAuto) {
        AdafruitAPI.AdafruitTurnAutoBulb(obj.isAuto)
    }

    res.status(200).send("Update state success!")
};

module.exports = {
    getInformation,
    updateState,
}