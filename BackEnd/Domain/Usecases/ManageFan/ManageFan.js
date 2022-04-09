const AdafruitAPI = require('../../../Data/remoteData/remoteData')


async function getInformation(req, res) {
    [isOn, isAuto] = await Promise.all([AdafruitAPI.AdafruitGetFanData(), AdafruitAPI.AdafruitGetAutoFanData()])
    results = {
        name: "Fan",
        isOn: isOn,
        isAuto: isAuto,
    }
    res.status(200).json(results)
};

async function updateState(req, res) {
    [isOn, isAuto] = await Promise.all([AdafruitAPI.AdafruitGetFanData(), AdafruitAPI.AdafruitGetAutoFanData()])
    obj = {
        isOn : req.body.isOn,
        isAuto : req.body.isAuto,
    }
    if (isAuto) {
        if (obj.isOn !== isOn) {
            AdafruitAPI.AdafruitTurnAutoFan(false)
            AdafruitAPI.AdafruitTurnFan(obj.isOn)
        } else if (obj.isAuto !== isAuto) {
            AdafruitAPI.AdafruitTurnAutoFan(obj.isAuto)
        }
    } else {
        if (obj.isOn !== isOn) {
            AdafruitAPI.AdafruitTurnFan(obj.isOn)
        }

        if (obj.isAuto) {
            AdafruitAPI.AdafruitTurnAutoFan(obj.isAuto)
        }
        
    }

    res.status(200).send("Update state success!")
};

module.exports = {
    getInformation,
    updateState,
}