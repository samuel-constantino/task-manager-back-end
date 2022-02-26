const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const decodeToken = (token) => {
    const decode = jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) throw new Error('Expired or invalid token');
        return decoded;
    });
    return decode;
};

module.exports = { decodeToken };
