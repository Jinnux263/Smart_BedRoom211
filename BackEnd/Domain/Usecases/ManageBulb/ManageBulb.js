// const database = require('../../../Data/dataSource/databaseConnect')
// const queries = require('../../../Data/dataSource/queries')
const AdafruitAPI = require('../../../Data/remoteData/remoteData')


async function getInformation(req, res) {
    [isOn, isAuto] = await Promise.all([AdafruitAPI.AdafruitGetBulbData(), AdafruitAPI.AdafruitGetAutoBulbData()])
    results = {
        name: "Bulb",
        isOn: isOn,
        isAuto: isAuto,
    }
    res.status(200).json(results)
};

async function updateState(req, res) {
    [isOn, isAuto] = await Promise.all([AdafruitAPI.AdafruitGetBulbData(), AdafruitAPI.AdafruitGetAutoBulbData()])
    obj = {
        isOn : false !== isOn,
        isAuto : false !== isAuto,
    }
    
    if (obj.isOn !== isOn) {
        AdafruitAPI.AdafruitTurnAutoBulb(obj.isAuto)
        AdafruitAPI.AdafruitTurnBulb(obj.isOn)
    }

    if (obj.isAuto !== isAuto) {
        AdafruitAPI.AdafruitTurnAutoBulb(obj.isAuto)
    }

    res.status(200).send("Update state success!")
};

module.exports = {
    getInformation,
    updateState,
}