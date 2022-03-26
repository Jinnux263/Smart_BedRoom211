const user = require('../../Model/User')

function logout() {
    console.log("logout");
    user.username = ""
    user.password = ""
};

module.exports = {
    logout
}