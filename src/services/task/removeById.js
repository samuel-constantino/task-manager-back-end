const taskModel = require('../../models/task');

const removeById = async (id) => {
    const removedTask = await taskModel.removeById(id);
    return removedTask;
};

module.exports = { removeById };
