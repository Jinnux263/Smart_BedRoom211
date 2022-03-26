const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')
const user = require('../../Model/User')

async function authentication(req, res) {
    //check voi user thay vi infor de dam bao tinh flexible
    infor = req.body

    query = queries.authentication()
    results = await database.makeQuery(query);
    console.log("authentication")
};

module.exports = {
    authentication
}