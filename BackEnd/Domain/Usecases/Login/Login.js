const database = require('../../../Data/dataSource/databaseConnect')
const queries = require('../../../Data/dataSource/queries')

function authentication(req, res) {
    //check voi user thay vi infor de dam bao tinh flexible
    infor = req.body
    const user = new Authen.user(infor.username, infor.password);

    query = queries.authentication()
    results = database.makeQuery(query);
    console.log("authentication")
};

module.exports = {
    authentication
}