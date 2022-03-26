const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/api-error');

const taskSchema = Joi.object({
  userId: Joi.string().min(24).empty(false).required(),
  name: Joi.string().min(6).empty(false).required(),
  description: Joi.string().min(5).empty(false).required(),
  status: Joi.string()
    .valid('In progress', 'Done')
    .empty(false)
    .required(),
  priority: Joi.object({
    urgent: Joi.boolean().required(),
    important: Joi.boolean().required(),
  }).required(),
});

const addTaskValidation = (task) => {
  const { error } = taskSchema.validate(task);
  if (error) badRequest(error.message);
};

module.exports = { addTaskValidation };
