const { findById } = require('./findById');

const { connection } = require('../connection');

const create = async (newTask) => {
    const db = await connection();
    const { insertedId: id } = await db.collection('tasks').insertOne(newTask);
    const taskFound = await findById(id);
    return taskFound;
};

module.exports = { create };
