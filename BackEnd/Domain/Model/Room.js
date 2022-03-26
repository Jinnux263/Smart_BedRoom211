const database = require('../../Data/dataSource/databaseConnect')
const queries = require('../../Data/dataSource/queries')

var room = {
    temperature: 25,
    humid: 0,
    brightness: 0,

    getInformation: function(req, res) {
        id = 0;
        query = queries.room_getInformation()
        results = database.makeQuery(query);
        res.send(results)
        console.log("Room: getInformation");
    },
    
    getHistory: function(req, res, id) {
        query = queries
        results = database.makeQuery(query)
        console.log("getHistory");
    },


}

module.exports = room