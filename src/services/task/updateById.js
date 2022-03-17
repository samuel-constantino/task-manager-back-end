const taskModel = require('../../models/task');

const updateById = async (task) => {
    const updatedTask = await taskModel.updateById(task);
    return updatedTask;
};

module.exports = { updateById };
