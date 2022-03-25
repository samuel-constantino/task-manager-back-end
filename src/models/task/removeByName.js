const { connection } = require('../connection');

const removeByName = async (name) => {
    const db = await connection();
    const { deletedCount } = await db.collection('tasks').deleteOne({ name });
    return deletedCount;
};

module.exports = { removeByName };
