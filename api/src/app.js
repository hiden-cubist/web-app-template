const express = require('express');
const app = express();

const env = process.env;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'db',
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: 'test'
});

const cors = require('cors');
const corsOptions = {
  origin: 'localhost'
}
app.use(cors());

app.get('/users', (request, response) => {
  const sql = 'SELECT * FROM users'
  connection.query(sql, (error, result, fields) => {
    if (error) throw error;
    response.send(result);
  });
});

app.listen(3000);
