const Authen = require('../../Model/User')

function authentication(infor) {
    const user = new Authen.user(infor.username, infor.password);
    console.log(user);
};

module.exports = {
    authentication
}