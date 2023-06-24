// src/db/mysql.js

const mysql = require('mysql');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'usuarios',
  port:3306
};

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a MySQL:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
