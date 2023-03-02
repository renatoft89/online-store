const prisma = require('../utils/prisma');
const hash = require("bcryptjs");


const userService = async (name, email, password, role) => {
  const hash_password = hash.hashSync(password, 8)
  
  const result = await prisma.user.create({
    data: {
      name,
      email,
      password: hash_password,
      role
    }
  })

  return result;

}

const indexService = async () => {
  const result = await prisma.user.findMany();

  return result
}

module.exports = { userService, indexService }