const taskService = require('../../services/task');

const create = async (req, res) => {
    const { _id: userId } = req.loggedUser;
    const { name, description, status } = req.body;
    const tasks = await taskService.create({ userId, name, description, status });
    return res.status(200).json(tasks);
};

module.exports = { create };
