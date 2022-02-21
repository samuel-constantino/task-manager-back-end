const taskService = require('../../services/task');

const findById = async (req, res) => {
    const { id } = req.params;

    const task = await taskService.findById(id);

    return res.status(200).json(task);
};

module.exports = { findById };
