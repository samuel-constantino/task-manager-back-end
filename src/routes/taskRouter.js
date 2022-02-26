const express = require('express');
const taskController = require('../controllers/task');

const taskRouter = express.Router();

taskRouter.get('/:id', taskController.findById);

module.exports = { taskRouter };
