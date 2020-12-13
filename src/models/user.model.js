const { DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'users',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'users', timestamps: false },
  )
  return User
}
