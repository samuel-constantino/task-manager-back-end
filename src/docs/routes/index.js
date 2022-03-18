const findByUser = require('./findByUser');
const findById = require('./findById');
const login = require('./login');
const register = require('./register');

module.exports = {
    paths: {
        '/login': {
            ...login,
        },
        '/register': {
            ...register,
        },
        '/tasks': {
            ...findByUser,
        },
        '/task/{id}': {
            ...findById,
        },
    },
};
