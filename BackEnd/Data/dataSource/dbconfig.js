// const username = process.env.SQL_SERVER_USERNAME;
// const passwd = process.env.SQL_SERVER_PASSWD;

// const DBconfig = {
//     login: {username},
//     password: {passwd},
//     database: 'ASSIGNMENT2',
//     server: 'MSI',
//     driver: 'msnodesqlv8',
//     options: {
//         trustedConnection: true
//     }
// };

const DBconfig = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb"
};

module.exports =  {
    DBconfig
}

