const { connection } = require('../connection');

const login = async ({ email, password }) => {
    const db = await connection();
    const userFound = await db.collection('users').findOne({ email, password });
    return userFound;
};

module.exports = { login };