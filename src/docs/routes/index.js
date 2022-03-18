const login = require('./login');
const register = require('./register');
// const findByUser = require('./findByUser');
const findById = require('./findById');
// const remove = require('./remove');
// const create = require('./create');
const update = require('./update');

module.exports = {
    paths: {
        '/login': {
            ...login,
        },
        '/register': {
            ...register,
        },
        // '/tasks': {
        //     ...findByUser,
        // },
        '/tasks/{id}': {
            ...findById,
        },
        // '/tasks/{id}': {
        //     ...remove,
        // },
        // '/tasks': {
        //     ...create,
        // },
        '/tasks': {
            ...update,
        },
    },
};
