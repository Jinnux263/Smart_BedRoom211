const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')
const user = require('../../Model/User')

async function authentication(req, res) {
    //check voi user thay vi infor de dam bao tinh flexible
    infor = req.body
    if (infor.username == "" || infor.password == "") {
        res.status(200).send(false)
    } else {
        query = queries.authentication(infor.username, infor.password)
        // query = queries.authentication()
        results = await database.makeQuery(query);

        output = results[0][0][0] == 0 ? false : true
        // console.log(output)
        res.status(200).send(output)
    }
    
};

module.exports = {
    authentication
}