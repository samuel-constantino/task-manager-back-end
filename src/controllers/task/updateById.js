const taskService = require('../../services/task');

const updateById = async (req, res) => {
    const { id } = req.params;
    const { name, description, status } = req.body;
    const updatedTask = await taskService.updateById({ id, name, description, status });
    return res.status(200).json(updatedTask);
};

module.exports = { updateById };
