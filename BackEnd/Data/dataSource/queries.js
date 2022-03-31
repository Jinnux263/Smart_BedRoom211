function getRoomHistoryQuery (room_id) {
    var msg = `exec get_data_of_room @room_id = '${room_id}'`;
    return msg;
}

function bulb_getInformation (id) {
    msg = `exec dbo.get_data_of_bulb @room_id = '${id}'`;
    return msg;
}

function fan_getInformation (id) {
    vmsg = `exec dbo.get_data_of_fan @room_id = '${id}'`;
    return msg;
}

function authentication(user = "", password ="") {
    var msg = `exec dbo.Check_user @user_name = '${user}', @pass_word = '${password}'`;
    return msg;
}


const queries = {
    getRoomHistoryQuery,
    bulb_getInformation,
    fan_getInformation,
    authentication,

}

module.exports = queries;
