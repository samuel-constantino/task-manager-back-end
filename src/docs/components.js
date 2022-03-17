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
            description: 'user identification',
            example: '620d08f0d997697d89beb314',
          },
          name: {
            type: 'string',
            description: 'task name',
            example: 'Coding in JavaScript',
          },
          status: {
            type: 'string',
            description: 'The status of the task',
            example: 'in progress',
          },
          priority: {
            type: 'object',
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
            example: '25d25ad283aa400af464c76d713c07ad',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Error message',
            example: 'Not found',
          },
          code: {
            type: 'string',
            description: 'Status Code of the Error',
            example: 'Invalid parameters',
          },
        },
      },
    },
  },
};