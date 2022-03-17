const express = require('express');
const rescue = require('express-rescue');
const taskController = require('../controllers/task');
const { auth } = require('../middlewares/auth');

const taskRouter = express.Router();

taskRouter.get('/', auth, rescue(taskController.findByUser));
taskRouter.get('/:id', auth, rescue(taskController.findById));
taskRouter.post('/', auth, rescue(taskController.create));
taskRouter.delete('/:id', auth, rescue(taskController.removeById));

module.exports = { taskRouter };
