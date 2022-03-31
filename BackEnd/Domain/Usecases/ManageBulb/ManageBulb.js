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
        isOn : req.body.isOn !== false,
        isAuto : req.body.isAuto !== false,
    }
    
    if (isAuto) {
        if (obj.isOn !== isOn) {
            AdafruitAPI.AdafruitTurnAutoBulb(false)
            AdafruitAPI.AdafruitTurnBulb(obj.isOn)
        } else if (obj.isAuto !== isAuto) {
            AdafruitAPI.AdafruitTurnAutoBulb(obj.isAuto)
        }
    } else {
        if (obj.isOn !== isOn) {
            AdafruitAPI.AdafruitTurnBulb(obj.isOn)
        }

        if (obj.isAuto) {
            AdafruitAPI.AdafruitTurnAutoBulb(obj.isAuto)
        }
        
    }

    res.status(200).send("Update state success!")
};

module.exports = {
    getInformation,
    updateState,
}