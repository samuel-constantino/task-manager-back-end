const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

const findById = async (id) => {
    const db = await connection();
    const taskFound = await db.collection('tasks').findOne({
        _id: ObjectId(id),
    });

    return taskFound;
};

module.exports = { findById };