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

// THIET LAP THONG TIN DANG NHAP DATABASE TAI DAY

const DBconfig = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "DoAn"
};

const mysql = require('mysql');

var connection = mysql.createConnection(DBconfig);

connection.connect(function(err){
    if (err) throw err;
    console.log("Connect to database successfully!")
})


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