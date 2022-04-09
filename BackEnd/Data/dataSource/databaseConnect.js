const DBconfig = {
    host: "localhost",
    user: "root",
    password: "admin",
    database: "DoAn",
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
};

const mysql = require('mysql2/promise');

// var connection = "mysql.createConnection(DBconfig);"
const connection = mysql.createPool(DBconfig)

async function makeQuery(query = "") {
    try {
        const rows = await connection.query(query);
        return rows[0];
    } catch (err) {
        console.log('DATABASE_ERROR => ' + err);
        return err;
    }
}

async function makeUpdateQuery(query = "") {
    try {
        const rows = await connection.query(query);
        return rows[0];
    } catch (err) {
        console.log('DATABASE_ERROR => ' + err);
        return err;
    }
}

async function makeSelectQuery(query = "") {
    try {
        const rows = await connection.query(query);
        return rows[0];
    } catch (err) {
        console.log('DATABASE_ERROR => ' + err);
        return err;
    }
}

module.exports = {
    makeQuery,
    makeUpdateQuery,
    makeSelectQuery,

}