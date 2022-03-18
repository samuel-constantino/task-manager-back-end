module.exports = {
    post: {
      tags: ['Register'],
      description: 'Register in the system',
      operationId: 'register',
      requestBody: {
        description: 'Body request',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Register',
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RegisterResponse',
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