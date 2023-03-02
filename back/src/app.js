const express = require('express');
const cors = require('cors');
const handlePrismaErrors = require('./middlewares/errorMiddleware');

const router = require('./routes')

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(handlePrismaErrors);


module.exports = app;
