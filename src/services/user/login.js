const userModel = require('../../models/user');
const { loginValidation } = require('./validations');
const { ApiError: { badRequest } } = require('../../global/api-error');
const { getToken } = require('../../global/utils/token');

const login = async (user) => {
    loginValidation(user);

    const userFound = await userModel.findByEmail(user.email);
    if (!userFound) badRequest('User does not exist');
    
    const result = await userModel.login(user);
    if (!result) badRequest('Invalid password');

    const token = getToken(result);
    delete result.password;

    return { ...result, token };
};

module.exports = { login };
