require('dotenv').config()
const express = require('express')
const cors = require('cors');
const routerIndex = require('./routes/index')
const routerUsers = require('./routes/users')

const app = express()
app.use(express.json())
app.use(cors())

//app.use('/', routerIndex)
app.use('/', routerUsers)
app.use('/', routerIndex)

app.listen(process.env.PORT,function(){
    console.log(`Running in the port ${process.env.PORT}`)
})

