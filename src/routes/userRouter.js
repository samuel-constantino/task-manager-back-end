const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/register', rescue(userController.register));
userRouter.post('/login', rescue(userController.login));

module.exports = { userRouter };
