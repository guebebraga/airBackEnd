const mongoose = require('../config/mongo')

const usersSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    rol: {type: String, required: true},
    contraseña: {type: String, required: true},
    /*usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', 
    }*/

},{timestamps: true})

const Users = mongoose.model('users', usersSchema);

async function post(data) {
  try{
    const nuevoUser = new Users(data)
    nuevoUser.save(); 
    return nuevoUser

  }catch (error) {
    throw ('Imposible insertar User')
  }
}

module.exports={post}
