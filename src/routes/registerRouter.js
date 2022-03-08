const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user');

const register = express.Router();

register.post('/register', rescue(userController.register));

module.exports = { register };
