const Room = require('../../Model/Room');

function getInformation() {
    const room = new Room.room();
    console.log("Room: getInformation");
};

module.exports = {
    getInformation
}