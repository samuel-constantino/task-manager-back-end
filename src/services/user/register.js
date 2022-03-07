const md5 = require('md5');
const userModel = require('../../models/user');
const { registerValidation } = require('./validations');
const { ApiError: { conflict } } = require('../../global/api-error');

const register = async (newUser) => {
    const { name, email, password } = newUser;
    
    registerValidation(newUser);
    
    const checkUser = await userModel.findByEmail(email);
    if (checkUser) conflict('User already exists');

    const encryptPassword = md5(password);
    const encryptUser = { name, email, password: encryptPassword };
    
    const result = await userModel.register(encryptUser);
    delete result.password;
    return result;
};

module.exports = {
    register,
};
