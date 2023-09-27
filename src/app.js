const express = require('express');
const { loginRouter, usersRouter, spellsRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', usersRouter);
app.use('/spell', spellsRouter)

module.exports = app;
