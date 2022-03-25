const taskModel = require('../../models/task');
const { ApiError: { badRequest } } = require('../../global/api-error');

const removeByName = async (name) => {
    const removedTask = await taskModel.removeByName(name);
    if (!removedTask) return badRequest('Tarefa não encontrada');
    return { message: 'Tarefa removida com sucesso' };
};

module.exports = { removeByName };
