const ModeloMongo = require("../models/modeloMongo")

const ctrlMongo ={}

ctrlMongo.traerInfo =async(req,res)=>{
    try {
        const user = await ModeloMongo.find({isActive:true})

        if(!user.length){
            return res.status(404).json({
                message:"no existe ningun usuario en la base de datos"
            })
        }

        return res.status(200).json({
            message:"Usuario encontrado",
            user
        })

    } catch (error) {
        return res.json({
            message: "error"
        })
    }
}

ctrlMongo.insertarUser = async(req, res)=>{
try {
        const { nombre,
            descripcion,
            email ,
            password }=req.body

            const nuevoUsuario= new ModeloMongo({
                nombre,
                descripcion,
                email,
                password
            })
  
            const userEmail = await ModeloMongo.findOne({email:email})
            if (userEmail){
                return res.json({
                    message:"el usuario con este correo ya existe",
    
                    
                })
            }
            const usuarcito=await nuevoUsuario.save()
            
        return res.status(201).json({
            message: "Usuario guardado correctamente",
            usuarcito

        })

} catch (error) {
    return res.status(401).json({
        message: "El usuario no se ha podido crear",
        error: error.message
    })
}

}


module.exports = ctrlMongo