const router = require('express').Router()

const {traerInfo,insertarUser}=require('../controllers/controladorMongo')


router.get('/usuario',traerInfo)
router.post('/usuario',insertarUser)


module.exports = router;
