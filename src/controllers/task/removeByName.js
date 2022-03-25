const taskService = require('../../services/task');

const removeByName = async (req, res) => {
    const { name } = req.params;
    const removedTask = await taskService.removeByName(name);
    return res.status(200).json(removedTask);
};

module.exports = { removeByName };
