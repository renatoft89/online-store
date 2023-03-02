const { userService } = require("../services/UserServices")

const userController = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await userService(name, email, password, role)

    return res.json(user)

  } catch (error) {
    next(error)
  }
}

module.exports = { userController }