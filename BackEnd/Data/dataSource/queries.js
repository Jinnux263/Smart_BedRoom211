function getHistoryQuery () {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}
function room_getInformation () {
    var msg = "SELECT * FROM Room";
    return msg;
}

function bulb_getInformation () {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}

function fan_getInformation () {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}

function authentication() {
    var msg = "SELECT * FROM User_s";
    return msg;
}


const queries = {
    getHistoryQuery,
    room_getInformation,
    bulb_getInformation,
    fan_getInformation,
    authentication,

}

module.exports = queries;
