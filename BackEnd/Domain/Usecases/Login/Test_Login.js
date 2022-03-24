const Authen = require('../../Model/User')
const database = require('../../../Data/dataSource/databaseConnect')

function authentication(infor = {username: 'username', password:'password'}) {
    //check voi user thay vi infor de dam bao tinh flexible
    const user = new Authen.user(infor.username, infor.password);

    query = ""
    results = database.makeQuery(query);
};

module.exports = {
    authentication
}