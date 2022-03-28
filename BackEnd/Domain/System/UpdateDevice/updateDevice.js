const AdafruitAPI = require('../../../Data/remoteData/remoteData')


async function turnOffFan(){
    AdafruitAPI.AdafruitTurnAutoFan(false)
    AdafruitAPI.AdafruitTurnFan(false)
}

async function turnoffBulb(){
    AdafruitAPI.AdafruitTurnAutoFan(false)
    AdafruitAPI.AdafruitTurnBulb(false)
}

async function turnOnFan(){
    AdafruitAPI.AdafruitTurnAutoFan(false)
    AdafruitAPI.AdafruitTurnFan(true)
}

async function turnOnBulb(){
    AdafruitAPI.AdafruitTurnAutoFan(false)
    AdafruitAPI.AdafruitTurnBulb(true)
}

async function turnOffAutoFan(){
    AdafruitAPI.AdafruitTurnAutoFan(false)
}

async function turnoffAutoBulb(){
    AdafruitAPI.AdafruitTurnAutoBulb(false)
}

async function turnOnAutoFan(){
    AdafruitAPI.AdafruitTurnAutoFan(true)
}

async function turnOnAutoBulb(){
    AdafruitAPI.AdafruitTurnAutoBulb(true)
}

module.exports = {
    turnOffFan,
    turnoffBulb,
    turnOnFan,
    turnOnBulb,
    turnOffAutoFan,
    turnoffAutoBulb,
    turnOnAutoFan,
    turnOnAutoBulb
    
}