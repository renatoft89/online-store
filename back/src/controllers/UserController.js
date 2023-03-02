const { userService, indexService } = require("../services/UserServices")

const userController = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await userService(name, email, password, role)

    return res.status(200).json(user)

  } catch (error) {
    next(error)
  }
}

const indexController = async (req, res, next) => {
  try {
    const allUser = await indexService();
  
    return res.status(200).json({ allUser })
    
  } catch (error) {
    next(error)
  }



}

module.exports = { userController, indexController }