const prisma = require("../utils/prisma");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const authService = async (email, password) => {
  const error = { erro: 'Invalid email or password' }

  const user = await prisma.user.findUnique({ where: { email }});  
  if (!user) {
    return error;
  }
  
  const verifyPassword = await compare(password, user.password);
  if (!verifyPassword) {
    return error;
  }

  const token = sign({ id: user.id }, "secretKey", { expiresIn: '1d'});

  const result = { id: user.id, name: user.name, email: user.email, role: user.role, token  }

  return result

}

module.exports = { authService };