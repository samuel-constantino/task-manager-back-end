const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const OPTIONS = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const getToken = (user) => {
    const { password, ...payload } = user;
    const token = jwt.sign({ data: payload }, JWT_SECRET, OPTIONS);
    return token;
};

module.exports = { getToken };
