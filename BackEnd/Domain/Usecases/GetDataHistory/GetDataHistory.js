const database = require('../../../Data/dataSource/databaseConnect')

function getHistory(id) {
    query = ""
    database.connection.query(query, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
    console.log("getHistory");
};

module.exports = {
    getHistory,
}