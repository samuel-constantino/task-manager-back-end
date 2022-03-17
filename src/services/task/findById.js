const taskModel = require('../../models/task');

const findById = async (id) => {
    const task = await taskModel.findById(id);
    return task;
};

module.exports = { findById };
