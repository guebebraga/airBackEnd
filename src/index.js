require('dotenv').config()
const express = require('express')
const routerIndex = require('./routes/index')

const app = express()
app.use(express.json())

app.use('/', routerIndex)

app.listen(process.env.PORT,function(){
    console.log(`Running in the port ${process.env.PORT}`)
})

