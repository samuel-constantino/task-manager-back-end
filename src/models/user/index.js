const { register } = require('./register');
const { findById } = require('./findById');
const { findByEmail } = require('./findByEmail');
const { login } = require('./login');

module.exports = {
    register,
    findById,
    findByEmail,
    login,
};
