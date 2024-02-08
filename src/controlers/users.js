const modelUsers = require('../models/users')

const post= async(req, res)=>{
    try{
    let datos = await modelUsers.post(req.body)
    return res.status(200).json({datos})
    }
    catch(error){
    return res.status(500).json({mensaje:'algo no anda bien'})
    }
}


module.exports={post}