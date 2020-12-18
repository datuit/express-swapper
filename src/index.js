require('dotenv').config()
require('module-alias/register')

const server = require('./server')

const logger = require('./logger')

const { PORT } = require('@constants/config')

server.listen(PORT, async (err) => {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(PORT, 'localhost')
})
