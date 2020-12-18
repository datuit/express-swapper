const jwt = require('jsonwebtoken')
const { SECRET } = require('@constants/config')

module.exports.generateAuthToken = (user) => {
  const token = jwt.sign({ id: user.id }, SECRET, {
    expiresIn: 60 * 60 * 24,
  })
  return token
}

module.exports.verifyAuthToken = (token) => {
  return jwt.verify(token, SECRET)
}
