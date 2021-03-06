const { ObjectId } = require('mongodb');

const { connection } = require('../connection');

const removeById = async (id) => {
    const db = await connection();
    const { deletedCount } = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
    return deletedCount;
};

module.exports = { removeById };
