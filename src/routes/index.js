const express = require('express')
const router = express.Router();
const controlersCilindros = require('../controlers/cilindros')
const controlersUsers = require('../controlers/users')

router.post('/cilindro', controlersCilindros.post)
router.get('/cilindro', controlersCilindros.get)

module.exports= router
