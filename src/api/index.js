const express = require('express')
const routerApi = express.Router()

routerApi.use('/v1', require('./v1'))

module.exports = routerApi
