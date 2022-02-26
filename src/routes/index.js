const express = require('express');
const { taskRouter } = require('./taskRouter');
const { userRouter } = require('./userRouter');

const router = express.Router({ mergeParams: true });

router.use('/task', taskRouter);
router.use('/user', userRouter);

module.exports = { router };