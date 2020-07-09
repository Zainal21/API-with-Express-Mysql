const mysql = require('mysql');

//db connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_barang'
});

connection.connect((err) => {
    if (err)console.log("conection failed")
});

module.exports = connection;