const taskModel = require('../../models/task');

const findByUser = async (userId) => {
    const tasks = await taskModel.findByUser(userId);
    return tasks;
};

module.exports = { findByUser };
