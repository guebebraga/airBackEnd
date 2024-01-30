const modeloCilindros = require("../models/cilindros.js")

const post = async(req, res)=>{
    try {
        let datos= await modeloCilindros.post(req.body)
        /*if(datos.rol !== 'admin'){
            throw 'Solo los admin pueden ingresar carreras'
        }*/
        console.log(req.body)
        console.log(datos)
        return res.status(200).json({datos})
    }catch(error){
        return res.status(500).json({mensaje:"Entraste en el catch de controlers"})
       /* next(error)*/
    }
}

module.exports = {post}
