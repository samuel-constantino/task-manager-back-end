const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/api-error');

const registerSchema = Joi.object({
    name: Joi.string().min(6).empty(false).required(),
    email: Joi.string().email().empty(false).required(),
    password: Joi.string().min(6).empty(false).required(),
});

const registerValidation = (user) => {
    const { error } = registerSchema.validate(user);
    if (error) badRequest(error.message);
};

module.exports = { registerValidation };
