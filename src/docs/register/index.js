const register = require('./register');

module.exports = {
    paths: {
        '/register': {
            ...register,
        },
    },
};
