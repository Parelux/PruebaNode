const express = require('express')
require('./db/mongoose')
const producsRouter = require('./routers/product')
const authRouter = require('./routers/auth')

const app = express()

//Server config
app.use(express.json())

//Server routing
app.use(authRouter)
app.use(producsRouter)

module.exports = app