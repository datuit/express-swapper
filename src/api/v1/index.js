const express = require('express')
const router = express.Router()
const db = require('@services/mysql')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
  const user = await db.sequelize.models.users.create(req.body)
  console.log(user)
})

module.exports = router
