const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000; // Choose a port for your server

// Middleware
app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
    host:'localhost:3306',
    user:'root',
    password:'root',
    database:'db'
})

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error registering user.' });
      } else {
        res.status(201).json({ message: 'User registered successfully.' });
      }
    });
  });

app.listen(port,()=>{
    console.log("....listening");
})