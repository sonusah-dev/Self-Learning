var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql;',
    database:'news_db'
});

con.connect((error) => {
    if (error) throw error;
    con.query("SELECT * FROM users", (error, result, fields) => {
        if (error) throw error;
        console.log(result[1].first_name);
        console.log(result[1].create_date);
    });
    con.query("SELECT * FROM users LIMIT 5", (error, result, fields) => {
        if (error) throw error;
        console.log(result);
    });
});