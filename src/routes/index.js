const express = require('express');
const { taskRouter } = require('./taskRouter');
const { loginRouter } = require('./loginRouter');
const { registerRouter } = require('./registerRouter');
const { error } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.use('/', taskRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);

router.use(error);

module.exports = { router };