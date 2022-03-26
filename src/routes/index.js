const express = require('express');
const { taskRouter } = require('./taskRouter');
const { loginRouter } = require('./loginRouter');
const { registerRouter } = require('./registerRouter');
const { error, swagger } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.use('/swagger', swagger.serve, swagger.setup);

router.use('/tasks', taskRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);

router.use(error);

module.exports = { router };