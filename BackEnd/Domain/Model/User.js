const database = require('../../Data/dataSource/databaseConnect')
const queries = require('../../Data/dataSource/queries')

var user = {
    username: "",
    password: "",
    authentication: function(req, res) {
        //check voi user thay vi infor de dam bao tinh flexible
        infor = req.body

        query = queries.authentication()
        results = database.makeQuery(query);
        console.log("authentication")
    },

    logout: function() {
        console.log("logout");
    },

}



module.exports = user