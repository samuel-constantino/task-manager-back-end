const { connection } = require('../connection');

const findByEmail = async (email) => {
    const db = await connection();
    const userFound = await db.collection('users').findOne({ email });
    return userFound;
};

module.exports = { findByEmail };