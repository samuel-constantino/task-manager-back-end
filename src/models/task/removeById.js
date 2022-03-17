const { ObjectId } = require('mongodb');

const { connection } = require('../connection');

const removeById = async (id) => {
    const db = await connection();
    const removedTask = await db.collection('tasks').remove({ _id: ObjectId(id) });
    console.log(removedTask);
    return removedTask;
};

module.exports = { removeById };
