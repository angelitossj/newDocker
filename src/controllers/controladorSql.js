const mysqlModel = require('../models/modeloMySql');

const ctrlMysql = {
  obtenerDatos: (req, res) => {
    mysqlModel.getAllData((error, results) => {
      if (error) {
        res.status(500).json({ error: 'Error al obtener los datos de MySQL' });
        return;
      }
      res.json(results);
    });
  },
  crearDato: (req, res) => {
    const { nombre, email, password } = req.body;
    const data = { nombre, email, password };
  
    mysqlModel.createData(data, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Error al crear el dato en MySQL' });
        return;
      }
      res.json({
        message:"El usuario se ha guardado exitosamente en la base de datos"
      });
    });
  },
};

module.exports = ctrlMysql;
