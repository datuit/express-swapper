const ErrorCustom = require('@helpers/error-custom')

const Login = (req, res) => {
  throw new ErrorCustom('acc')
}

module.exports = {
  Login,
}
