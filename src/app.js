const express = require('express')
require('./db/mongoose')
const producsRouter = require('./routers/product')

const app = express()

//Server config
app.use(express.json())

//Server routing
app.use(producsRouter)

module.exports = app