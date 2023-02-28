const express = require('express')
const loginRouter = require('./user')

const router = express.Router()

router.use('/user', loginRouter);

module.exports = router