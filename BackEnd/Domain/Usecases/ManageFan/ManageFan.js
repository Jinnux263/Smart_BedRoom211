function getInformation(id = 0) {
    query = ""
    database.connection.query(query, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
    console.log("Fan: getInformation");
};

function updateState(id = 0) {
    query = ""
    database.connection.query(query, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
    console.log("Fan: updateState");
};

function turnOffAuto(id = 0) {
    console.log("Fan: turnOffAuto");
};

module.exports = {
    getInformation,
    updateState,
    turnOffAuto
}