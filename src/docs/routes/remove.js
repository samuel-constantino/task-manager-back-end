module.exports = {
    delete: {
      tags: ['Tasks'],
      description: 'Remove Task for Id',
      operationId: 'remove',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'Task Id',
          example: '620e45f0b404aad8c73f2412',
        },
        {
          in: 'header',
          name: 'authorization',
          schema: {
            type: 'string',
            format: 'token',
          },
          required: true,
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
          description: 'Bad Request',
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