const bcrypt = require('bcrypt')
const prisma = require('@services/prisma')
const { generateAuthToken } = require('@helpers/token')

module.exports.Login = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    })
    if (!user) throw new Error('Invalid login credential!')
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) throw new Error('password is not correct!')
    const token = generateAuthToken(user)
    res.status(201).send({ user, token })
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports.Register = async (req, res) => {
  const { username, password } = req.body
  try {
    const isExistUser = await prisma.user.findUnique({
      where: {
        username,
      },
    })
    if (isExistUser) {
      res.status(403).send('username is exist!')
    } else {
      const passwordHash = await bcrypt.hash(password, 10)
      const user = await prisma.user.create({
        data: {
          username,
          password: passwordHash,
        },
      })
      const token = generateAuthToken(user)
      res.status(201).send({ user, token })
    }
  } catch (error) {
    res.status(400).send(error)
  }
}
