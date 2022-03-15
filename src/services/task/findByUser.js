const Task = require('../../models/task');

const findByUser = async (userId) => {
    const tasks = await Task.findByUser(userId);
    return tasks;
};

module.exports = { findByUser };
