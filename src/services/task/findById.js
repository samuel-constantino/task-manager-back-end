const Task = require('../../models/task');

const findById = async (id) => {
    const task = await Task.findById(id);
    return task;
};

module.exports = { findById };
