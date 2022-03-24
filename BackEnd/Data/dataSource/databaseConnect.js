// const config = require("./dbconfig.js");
// const sql = require("mssql/msnodesqlv8.js");

// const DBconnect = () => {
//     sql.connect(config).then(() => {
//         console.log(`SQL Server Conected`.cyan.underline)
//         // console.log(pool)
//         // return pool;
//     }).catch(function(err) {
//         console.log(`[Error]:${err}`.red.underline.bold)
//         process.exit()
//     });
// }

const DBconfig = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb"
};

const mysql = require('mysql');

var connection = mysql.createConnection(DBconfig);

function makeQuery (query) {
    connection.query(query, function(err, results) {
        if (err) throw err;
        return results;
    });
}
module.exports = {
    connection,
    makeQuery
}
