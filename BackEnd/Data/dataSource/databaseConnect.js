const config = require("./dbconfig.js");
const sql = require("mssql/msnodesqlv8.js");

const DBconnect = () => {
    sql.connect(config).then(() => {
        console.log(`SQL Server Conected`.cyan.underline)
        // console.log(pool)
        // return pool;
    }).catch(function(err) {
        console.log(`[Error]:${err}`.red.underline.bold)
        process.exit()
    });
}

module.exports = {
    DBconnect
}
