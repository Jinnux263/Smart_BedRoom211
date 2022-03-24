const Authen = require('../../Model/User')
const database = require('../../../Data/dataSource/databaseConnect')

function authentication(req, res) {
    //check voi user thay vi infor de dam bao tinh flexible
    infor = req.body
    const user = new Authen.user(infor.username, infor.password);

    query = ""
    results = database.makeQuery(query);
    console.log("authentication")
};

module.exports = {
    authentication
}