const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/api-error');

const loginSchema = Joi.object({
    email: Joi.string().email().empty(false).required(),
    password: Joi.string().min(6).empty(false).required(),
});

const loginValidation = (user) => {
    const { error } = loginSchema.validate(user);
    if (error) badRequest(error.message);
};

module.exports = { loginValidation };
