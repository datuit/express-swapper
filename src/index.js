require('dotenv').config()
require('module-alias/register')

const server = require('./server')

const logger = require('./logger')

server.listen(3000, async (err) => {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(3000, 'localhost')
})
