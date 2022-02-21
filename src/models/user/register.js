const { findById } = require('./findById');

const { connection } = require('../connection');

const register = async (newUser) => {
    const db = await connection();

    const { insertedId: id } = await db.collection('users').insertOne(newUser);
    if (!id) return null;

    const userFound = await findById(id);
    return userFound;
};

module.exports = { register };