const { Schema, model} = require('mongoose')

const schemaMongo = new Schema({
    nombre: {
        type: String,
        required:true
    },
    descripcion: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,

        required:true
    },
    isActive: {
        type: Boolean,
        default: true

    },
    role: {
        type: String,
        default:'user'
    }







})




module.exports = model('usuarios', schemaMongo)
