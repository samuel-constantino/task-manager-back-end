const express = require('express');
const swaggerUI = require('swagger-ui-express');
const docs = require('../docs');
const { taskRouter } = require('./taskRouter');
const { loginRouter } = require('./loginRouter');
const { registerRouter } = require('./registerRouter');
const { error } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));

router.use('/tasks', taskRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);

router.use(error);

module.exports = { router };