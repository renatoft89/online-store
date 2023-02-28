const express = require('express');

const { userController } = require('../../controllers/UserController');

const userRouter = express.Router();

userRouter.post('/new', userController);

module.exports = userRouter;