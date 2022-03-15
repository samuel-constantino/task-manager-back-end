const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/api-error');

const taskSchema = Joi.object({
  userId: Joi.string().min(24).empty(false).required(),
  name: Joi.string().min(6).empty(false).required(),
  description: Joi.string().min(10).empty(false).required(),
  status: Joi.string()
      .valid('In progress', 'Completed')
      .empty(false)
      .required(),
});

const taskValidation = (task) => {
  const { error } = taskSchema.validate(task);
  if (error) badRequest(error.message);
};

module.exports = { taskValidation };
