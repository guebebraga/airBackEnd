const express = require('express')
const router = express.Router();
const controlersCilindros = require('../controlers/cilindros')
const controlersUsers = require('../controlers/users')

router.post('/cilindro', controlersCilindros.post)
router.post('/user', controlersUsers.post)

module.exports= router
