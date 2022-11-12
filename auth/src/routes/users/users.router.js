const express = require('express');
const usersController = require('./users.controller');

const authRouter = express.Router();

authRouter.post('/login', usersController.loginWithEmailAndPassword);

module.exports = authRouter;