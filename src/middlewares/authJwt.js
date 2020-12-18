const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authorization = req.get('Authorization')
  if (!authorization) {
    next('No Authorization header')
  }
}
