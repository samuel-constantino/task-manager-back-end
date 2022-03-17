const taskModel = require('../../models/task');
const { ApiError: { badRequest } } = require('../../global/api-error');

const removeById = async (id) => {
    const removedTask = await taskModel.removeById(id);
    if (!removedTask) return badRequest('Tarefa não encontrada');
    return { message: 'Tarefa removida com sucesso' };
};

module.exports = { removeById };
