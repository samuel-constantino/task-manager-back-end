const taskModel = require('../../models/task');
const { addTaskValidation } = require('./validations');

const create = async (newTask) => {
    addTaskValidation(newTask);
    
    const result = await taskModel.create(newTask);
    return result;
};

module.exports = { create };
