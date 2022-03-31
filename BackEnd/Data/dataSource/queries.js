function getRoomHistoryQuery (room_id) {
    var msg = `call get_data_of_room('${room_id}');`;
    return msg;
}

function bulb_getInformation (id) {
    msg = `call get_data_of_bulb('${id}');`;
    return msg;
}

function fan_getInformation (id) {
    msg = `call get_data_of_fan('${id}');`;
    return msg;
}

function authentication(user = "", password ="") {
    var msg = `call Check_user('${user}', '${password}');`;
    return msg;
}


const queries = {
    getRoomHistoryQuery,
    bulb_getInformation,
    fan_getInformation,
    authentication,

}

module.exports = queries;
