const Authen = require('../../Model/User')

function authentication(infor = {username: 'username', password:'password'}) {
    const user = new Authen.user(infor.username, infor.password);
    //check voi user thay vi infor de dam bao tinh flexible
    console.log(user);
};

module.exports = {
    authentication
}