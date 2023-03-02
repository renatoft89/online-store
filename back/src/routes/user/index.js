const express = require('express');

const { userController, indexController } = require('../../controllers/UserController');
const { authController } = require('../../controllers/AuthController');

const userRouter = express.Router();
const userValidate = require('../../middlewares/userMiddleware');

userRouter.post('/new', userValidate, userController);
userRouter.get('/list', indexController);
userRouter.post('/auth', authController)

module.exports = userRouter;