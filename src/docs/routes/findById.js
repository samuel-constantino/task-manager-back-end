module.exports = {
  get: {
    tags: ['Tasks'],
    description: 'Get Task for Id',
    operationId: 'findById',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'Task Id',
        example: '620e45f0b404aad8c73f2412',
      },
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Task',
            },
          },
        },
      },
      400: {
        description: 'Task not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Error',
            },
          },
        },
      },
    },
  },
};