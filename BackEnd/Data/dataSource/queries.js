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

function bulb_updateState () {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}

function bulb_turnOffAuto () {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}

function fan_getInformation () {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}

function fan_updateState () {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}

function fan_turnOffAuto () {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}

function authentication() {
    var msg = "SELECT * FROM DEVICE_DATA";
    return msg;
}




const queries = {
    getHistoryQuery,
    room_getInformation,
    bulb_getInformation,
    bulb_updateState,
    bulb_turnOffAuto,
    fan_getInformation,
    fan_updateState,
    fan_turnOffAuto,
    authentication,

}

module.exports = queries;
