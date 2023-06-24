const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connection = require("./src/db/mysql")
const conexionMongo = require('./src/db/mongo');
const rutasMongo = require('./src/routes/rutasMongo');

const app = express();
const PORT = 3000;
const mysql = require('mysql');
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'usuarios',
  ports: process.env.DB_PORT || 3307
};

app.get('/verificar', (req, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.connect((error) => {
    if (error) {
      console.log('Error al conectar a MySQL:', error);
      res.status(500).json({ error: 'Error al conectar a MySQL' });
      return;
    }

    console.log('Conexión exitosa a MySQL');
    res.json({ message: 'Conexión exitosa a MySQL' });

    connection.end();
  });
});


conexionMongo().then(() => {
  // Middleware
  app.use(express.json());

  // Rutas
  app.use(rutasMongo);
  const mysqlRoutes = require('./src/routes/rutasSql');
  app.use(mysqlRoutes);
  // Iniciar el servidor

  //este es mi endpoint para que se muestre la conexion a mongo
  app.get('/status', (req, res) => {
    const mongoStatus = mongoose.connection.readyState;
    if (mongoStatus === 1) {
      res.status(200).json({ message: 'Conectado a MongoDB' });
    } else {
      res.status(500).json({ message: 'No se pudo conectar a MongoDB' });
    }
  });
  app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log(`No se pudo conectar a la base de datos: ${error}`);
});
