const taskModel = require('../../models/task');
const { ApiError: { badRequest } } = require('../../global/api-error');

const findById = async (id) => {
    const task = await taskModel.findById(id);
    if (!task) badRequest('Task not found');
    return task;
};

module.exports = { findById };
