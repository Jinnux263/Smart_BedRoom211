const Authen = require('../../Model/User')

function authentication(infor = {username: 'username', password:'password'}) {
    //check voi user thay vi infor de dam bao tinh flexible
    const user = new Authen.user(infor.username, infor.password);
    
    query = ""
    database.connection.query(query, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
};

module.exports = {
    authentication
}