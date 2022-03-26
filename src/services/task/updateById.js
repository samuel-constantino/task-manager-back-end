const taskModel = require('../../models/task');
const { updateTaskValidation } = require('./validations');

const updateById = async (task) => {
    updateTaskValidation(task);

    const updatedTask = await taskModel.updateById(task);
    return updatedTask;
};

module.exports = { updateById };
