const AdafruitAPI = require('../../../Data/remoteData/remoteData')
const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

function updateDatabase() {
    const roomData = AdafruitAPI.AdafruitGetRoomData()
    database.makeQuery("")

    const fanData = AdafruitAPI.AdafruitGetFanData()
    database.makeQuery("")

    const bulbData = AdafruitAPI.AdafruitGetBulbData()
    database.makeQuery("")

}

module.exports = {
    updateDatabase,
}