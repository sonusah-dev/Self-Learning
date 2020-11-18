// required dependencies
const express = require('express');
const { createConnection } = require('mysql'),
    bodyparser = require('body-parser'),
    mysql = require('mysql'),
    bcrypt = require('bcrypt'),
    path = require('path'),
    app = express();

//  using bodyparser
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

// creating connection with database    
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql;',
    database: 'api'
});

// connecting with database
pool.connect((error) => {
    if (error) throw error;
    console.log('MySQL is Connected');
});

// landing page
app.get('/', (req, res) => {
    res.send('Index Page');      
});

// registration page route
app.get('/register', (req, res) => {
    res.render('register');
})

// user registration route
app.post('/register', async (req, res) => { 
    try {
        const { name, email, phone, password, confirmPassword } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        var sql = "INSERT INTO registration SET ?";
        pool.query(sql, { name:name, email:email, phone:phone, password:hashedPassword }, (error,result) => { 
            if (error) throw error;
            console.log(result);
            res.send('Inserted Successfully');
        });    
    } catch (error) {
          res.status(500).send(err);
    }
});

// login page route
app.get('/login', (req, res) => {
    res.render('login');
});

// login validation route
// app.post('/login', async (req, res) => {
//     sql = "SELECT * FROM registration WHERE email = " + req.body.email;
//     pool.query(sql, (error, fields) => {    
//         if (fields == null) {
//             return res.status(400).send('User not found');
//         }
//         try {
//             if (await bcrypt.compare(req.body.password, fields.password)) {
//                 res.send('Welcome ' + fields.name);
//             } else {
//                 res.send('Not allowed');
//             }
//         } catch (error) {
//             res.status(500).send(error);
//         }
//     });    
// });

// unhandle route or 404
app.get('*', (req, res) => { 
    res.send('<h1 style="text-align:center;margin-top:250px">404<br>Page not found</h1>');
});

// server port address 
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});