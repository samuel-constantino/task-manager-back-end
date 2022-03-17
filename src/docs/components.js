module.exports = {
  components: {
    schemas: {
      Task: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'task identification',
            example: '620e45e0c404aad8c73f2412',
          },
          userId: {
            type: 'string',
            description: 'user id',
            example: '620d08f0d997697d89beb314',
          },
          name: {
            type: 'string',
            description: 'task name',
            example: 'Coding in JavaScript',
          },
          status: {
            type: 'string',
            description: 'The status of the Task',
            example: 'in progress',
          },
          priority: {
            type: 'object',
            description: 'The priority level of th Task',
            example: {
              urgent: false,
              important: true,
            },
          },
        },
      },
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'user identification',
            example: '620e45e0c404aad8c73f2412',
          },
          name: {
            type: 'string',
            description: 'user name',
            example: 'Username',
          },
          email: {
            type: 'string',
            description: 'email of the User',
            example: 'user@email.com',
          },
          password: {
            type: 'string',
            description: 'password of the User',
            example: '25d25ad283aa400af464c76d713c07ad',
          },
        },
      },
      Login: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'email of the user',
            example: 'samuel@email.com',
          },
          password: {
            type: 'string',
            description: 'password of the user',
            example: 'pass123456',
          },
        },
      },
      Register: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'user name',
            example: 'Samuel Constantino',
          },
          email: {
            type: 'string',
            description: 'email of the user',
            example: 'samuel@email.com',
          },
          password: {
            type: 'string',
            description: 'password of the user',
            example: 'pass123456',
          },
        },
      },
      RegisterResponse: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'user identification',
            example: '620e45e0c404aad8c73f2412',
          },
          name: {
            type: 'string',
            description: 'user name',
            example: 'Samuel Constantino',
          },
          email: {
            type: 'string',
            description: 'email of the User',
            example: 'user@email.com',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Error message',
            example: 'Bad Request',
          },
        },
      },
    },
  },
};
