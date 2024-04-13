const modeloCilindros = require("../models/cilindros.js")


const agregar = async(req, res)=>{
    try {
        let datos= await modeloCilindros.agregar(req.body)
        console.log(datos)
        return res.status(200).json({datos})
    }catch(error){
        return res.status(500).json({mensaje:"Entraste en el catch de controlers"})
       // next(error)
    }
}


const post = async(req, res)=>{
    try{
        let {num} = req.body
        if(!num){
            return res.status(401).json({mensaje :"Falta ingresar num"})
        }
        cilindro = await modeloCilindros.post(num)
        return res.status(200).json({mensaje: `Cilindro encontrado`, cilindro})
    }
    catch(error){
        return res.status(500).json({mensaje:"ocurrio un error"})
    }
}

module.exports = {post, agregar}
