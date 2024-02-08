const express = require('express')
const router = express.Router();

const controlersUsers = require('../controlers/users')

router.post('/user', controlersUsers.post)


module.exports= router