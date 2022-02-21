const findByUser = require('./findByUser');
const findById = require('./findById');

module.exports = {
    paths: {
        '/tasks': {
            ...findByUser,
        },
        '/task/{id}': {
            ...findById,
        },
    },
};
