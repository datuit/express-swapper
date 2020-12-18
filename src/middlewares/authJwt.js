const prisma = require('@services/prisma')
const { verifyAuthToken } = require('@helpers/token')

module.exports = async (req, res, next) => {
  const token = req.header('Authorization')
  try {
    if (!token) throw new Error('No Authorization header')
    const data = verifyAuthToken(token.replace('Bearer ', ''))
    const user = await prisma.user.findUnique({
      where: {
        id: data.id,
      },
    })
    if (!user) throw new Error()
    req.context = {
      user,
      token,
    }
    next()
  } catch (error) {
    res.status(401).send('Not authorized to access this resource')
  }
}
