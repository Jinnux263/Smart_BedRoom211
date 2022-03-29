const user = require('../../Model/User')

function logout(req, res) {
    console.log("logout");
    user.username = ""
    user.password = ""
    res.status(200).send(true)
};

module.exports = {
    logout
}