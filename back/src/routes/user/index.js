const express = require('express');

const { userController, indexController } = require('../../controllers/UserController');
const userRouter = express.Router();
const userValidate = require('../../middlewares/userMiddleware');

userRouter.post('/new', userValidate, userController);
userRouter.get('/list', indexController);

module.exports = userRouter;