const taskService = require('../../services/task');

const findByUser = async (req, res) => {
    const { _id: userId } = req.loggedUser;
    const tasks = await taskService.findByUser(userId);
    return res.status(200).json(tasks);
};

module.exports = { findByUser };
