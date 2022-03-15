const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

const findByUser = async (userId) => {
    const db = await connection();
    const tasksFound = await db.collection('tasks').find({
        userId: ObjectId(userId),
    }).toArray();
    return tasksFound;
};

module.exports = { findByUser };