const taskModel = require('../../models/task');
const { taskValidation } = require('./validations');

const create = async (newTask) => {
    taskValidation(newTask);
    
    const result = await taskModel.create(newTask);
    return result;
};

module.exports = { create };
