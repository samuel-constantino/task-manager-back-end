const md5 = require('md5');
const userModel = require('../../models/user');
const { loginValidation } = require('./validations');
const { ApiError: { badRequest } } = require('../../global/api-error');
const { getToken } = require('../../global/utils/token');

const login = async (user) => {
    const { email, password } = user;
    loginValidation(user);

    const userFound = await userModel.findByEmail(email);
    if (!userFound) badRequest('User does not exist');
    
    const encryptPassword = md5(password);

    const result = await userModel.login({ email, password: encryptPassword });
    if (!result) badRequest('Invalid password');

    const token = getToken(result);
    delete result.password;

    return { ...result, token };
};

module.exports = { login };
