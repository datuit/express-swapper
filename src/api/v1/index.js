const express = require('express')
const routerV1 = express.Router()

routerV1.get('/a', (req, res) => {
  res.send('hello')
})

module.exports = routerV1
