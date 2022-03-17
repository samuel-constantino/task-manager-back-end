const taskService = require('../../services/task');

const removeById = async (req, res) => {
    const { id } = req.params;
    const removedTask = await taskService.removeById(id);
    return res.status(200).json(removedTask);
};

module.exports = { removeById };
