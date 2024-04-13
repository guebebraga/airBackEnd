const express = require('express')
const router = express.Router();
const controlersCilindros = require('../controlers/cilindros')


router.post('/balon', controlersCilindros.agregar)
router.post('/cilindro', controlersCilindros.post)

module.exports= router
