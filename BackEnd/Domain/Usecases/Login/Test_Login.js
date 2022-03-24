const Authen = require('../../Model/User')
const database = require('../../../Data/dataSource/databaseConnect')

function authentication(req, res) {
    //check voi user thay vi infor de dam bao tinh flexible
    infor = req.body
    const user = new Authen.user(infor.username, infor.password);

    results = {
        temperature : 10,
        humidity : 25,
    }
    res.send(results)
    console.log("authentication")
};

module.exports = {
    authentication
}