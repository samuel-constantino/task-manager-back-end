const express = require('express');
const { taskRouter } = require('./taskRouter');
const { userRouter } = require('./userRouter');
const { error } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.use('/task', taskRouter);
router.use('/user', userRouter);

router.use(error);

module.exports = { router };