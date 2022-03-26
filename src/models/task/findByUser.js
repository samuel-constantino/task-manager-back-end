const { connection } = require('../connection');

const findByUser = async (userId) => {
  const db = await connection();
  const tasksFound = await db.collection('tasks').find(
    { userId, status: 'In progress' },
  ).toArray();
  return tasksFound;
};

module.exports = { findByUser };
