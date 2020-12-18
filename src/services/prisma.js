const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  prisma.$connect().then(() => {
    console.log('Prisma connected!')
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

module.exports = prisma
