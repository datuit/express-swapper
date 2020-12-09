module.exports = {
  SECRET: 'bezkoder-secret-key',
  HOST_DB: process.env.HOST_DB,
  PORT_DB: process.env.PORT_DB,
  USER_DB: process.env.USER_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
