module.exports = {
    post: {
      tags: ['Login'],
      description: 'Login in the system',
      operationId: 'login',
      requestBody: {
        description: 'Body request',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Login',
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
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        400: {
          description: 'User does not exist or Password Invalid',
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