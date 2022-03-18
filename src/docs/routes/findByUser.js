module.exports = {
  get: {
    tags: ['Tasks'],
    description: 'Get Tasks for User',
    operationId: 'findByUser',
    parameters: [],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Task',
              },
            },
          },
        },
      },
    },
  },
};
