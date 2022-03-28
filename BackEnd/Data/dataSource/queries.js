function getHistoryQuery () {
    var msg = "SELECT * FROM DEVICE_DATA";
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
    bulb_getInformation,
    fan_getInformation,
    authentication,

}

module.exports = queries;
