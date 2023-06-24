

const express = require('express');
const router = express.Router();
const ctrlMysql = require('../controllers/controladorSql');

// Ruta GET '/mysql'
router.get('/sql', ctrlMysql.obtenerDatos);

// Ruta POST '/mysql'
router.post('/sql', ctrlMysql.crearDato);

module.exports = router;
