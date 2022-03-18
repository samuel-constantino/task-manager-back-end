module.exports = {
    post: {
      tags: ['Tasks'],
      description: 'Update a new Task',
      operationId: 'update',
      requestBody: {
        description: 'Body request',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Task',
            },
          },
        },
      },
      parameters: [
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
          description: 'Data Invalid',
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