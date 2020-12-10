const mysql = require('mysql2')
const Sequelize = require('sequelize')

const logger = require('../logger')
const {
  HOST_DB,
  PASSWORD_DB,
  PORT_DB,
  USER_DB,
  NAME_DB,
  dialect,
  pool,
} = require('@config')

const sequelize = new Sequelize(NAME_DB, USER_DB, PASSWORD_DB, {
  host: HOST_DB,
  dialect: dialect,
  operatorsAliases: false,

  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
})

const con = mysql.createConnection({
  host: HOST_DB,
  user: USER_DB,
  password: PASSWORD_DB,
  port: PORT_DB,
  database: NAME_DB,
})

con.connect(function (err) {
  if (err) throw err
  logger.mysqlStarted()
})

const db = {}
db.mysql = mysql
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = mysql
