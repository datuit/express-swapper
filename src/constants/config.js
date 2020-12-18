module.exports = {
  HOST_DB: process.env.HOST_DB,
  NAME_DB: process.env.NAME_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,
  PORT: process.env.PORT,
  PORT_DB: process.env.PORT_DB,
  SECRET: process.env.JWT_SECRET,
  SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
  USER_DB: process.env.USER_DB,

  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
