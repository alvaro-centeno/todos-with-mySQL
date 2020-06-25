const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "063089Amc!!!",
    database: "todo_db",
});

connection.connect((err) => {
    if (err) throw err;
});
