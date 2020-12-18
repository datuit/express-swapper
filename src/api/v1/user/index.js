const express = require('express')
const authMiddleware = require('@middlewares/authJwt')
const userController = require('@controllers/user')
const router = express.Router()

router.post('/login', userController.Login)
router.post('/register', userController.Register)

router.use(authMiddleware)

router.get('/', (req, res) => {
  res.send('hello')
})

module.exports = router
