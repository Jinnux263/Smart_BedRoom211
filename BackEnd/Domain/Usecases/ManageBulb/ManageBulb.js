function getInformation(id = 1) {
    query = ""
    database.connection.query(query, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
    console.log("Bulb: getInformation");
};

function updateState(id = 1) {
    query = ""
    database.connection.query(query, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
    console.log("Bulb: updateState");
};

function turnOffAuto(id = 1) {
    console.log("Bulb: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}