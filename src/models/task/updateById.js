const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

const updateById = async (task) => {
    const { id, name, description, status, priority } = task;
    
    const db = await connection();

    const query = { _id: ObjectId(id) };
    const update = { $set: { name, description, status, priority } };
    const options = { returnDocument: 'after' };

    const { value: updatedTask } = await db.collection('tasks').findOneAndUpdate(
        query,
        update,
        options,
    );
    return updatedTask;
};

module.exports = { updateById };