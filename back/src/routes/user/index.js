const express = require('express');

const { userController } = require('../../controllers/UserController');
const userRouter = express.Router();
const userValidate = require('../../middlewares/userMiddleware');

userRouter.post('/new', userValidate, userController);

module.exports = userRouter;