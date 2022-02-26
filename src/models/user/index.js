const { register } = require('./register');
const { findById } = require('./findById');
const { findByEmail } = require('./findByEmail');

module.exports = {
    register,
    findById,
    findByEmail,
};
