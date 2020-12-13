const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

const swaggerDocV1 = require('@api/v1/swagger.json')
const apiRouter = require('@api')

const db = require('@services/mysql')
require('@models/user.model')(db.sequelize)

const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocV1))
server.use('/api', apiRouter)

server.post('/', (req, res) => {
  res.send('hello1')
})

module.exports = server
