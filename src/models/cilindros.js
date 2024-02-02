const mongoose = require('../config/mongo')

const cilindrosSchema = new mongoose.Schema({
    nombreGas: {type: String, required: true},
    descripcion: {type: String, required: true},
    carga: {type: String, required: true},
    /*usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', 
    }*/

},{timestamps: true})

const Cilindros = mongoose.model('cilindros',cilindrosSchema);

async function post(data) {
  try{
    const nuevoCilindro = new Cilindros(data)
    nuevoCilindro.save(); 
    return nuevoCilindro

  }catch (error) {
    throw ('Imposible insertar Cilindro')
  }
}

module.exports={post}
