const Room = require('../../Model/Room');

function getInformation() {
    query = ""
    database.connection.query(query, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
    // const room = new Room.room();
    console.log("Room: getInformation");
};

module.exports = {
    getInformation
}