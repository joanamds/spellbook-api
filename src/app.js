const express = require('express');
const { loginRouter, usersRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', usersRouter)

module.exports = app;
