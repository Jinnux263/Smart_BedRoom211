function getHistoryQuery () {
    this.content = "";
}
function room_getInformation () {
    this.content = "";
}

function bulb_getInformation () {
    this.content = "";
}

function bulb_updateState () {
    this.content = "";
}

function bulb_turnOffAuto () {
    this.content = "";
}

function fan_getInformation () {
    this.content = "";
}

function fan_updateState () {
    this.content = "";
}

function fan_turnOffAuto () {
    this.content = "";
}

function authentication() {
    this.content = "";
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
