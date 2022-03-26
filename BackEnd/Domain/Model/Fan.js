var fan = {
    isOn : false,
    isAuto : true,

    getInformation: function(req, res, id = 1) {
        query = queries.bulb_getInformation()
        results = database.makeQuery(query);
        res.status(200).json(results)
    
        console.log("Bulb: getInformation");
    },
    
    updateState : function(req, res, id = 1) {
        query = queries.bulb_updateState()
        results = database.makeQuery(query);
        console.log("Bulb: updateState");
    },
    
    turnOffAuto : function(req, res, id = 1) {
        console.log("Bulb: turnOffAuto");
    },


}

module.exports = fan