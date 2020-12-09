const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

const mysql = require('@services/mysql')

const swaggerDocV1 = require('@api/v1/swagger.json')
const apiRouter = require('@api')

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocV1))
server.use('/api', apiRouter)

server.get('/', (req, res) => {
  res.send('hello')
})

module.exports = server
