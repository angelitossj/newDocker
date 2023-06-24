const connection = require('../db/mysql');

const mysqlModel = {
  getAllData: (callback) => {
    connection.query('SELECT * FROM usuarios', callback);
  },
  createData: (data, callback) => {
    connection.query('INSERT INTO usuarios SET ?', data, callback);
  },
};

// Verificar y crear la tabla si no existe
connection.query(
  'CREATE TABLE IF NOT EXISTS usuarios (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), email VARCHAR(255), password VARCHAR(255))',
  (error) => {
    if (error) {
      console.log('Error al crear la tabla:', error);
    } else {
      console.log('Tabla creada correctamente o ya existe.');
    }
  }
);

module.exports = mysqlModel;
