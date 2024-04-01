const express = require('express')
const router = express.Router();
const controlersCilindros = require('../controlers/cilindros')


//router.post('/cilindro', controlersCilindros.post)
router.post('/cilindro', controlersCilindros.post)

module.exports= router
