require('dotenv').config();

const { PORT } = process.env;

module.exports = {
    servers: [
      {
        url: `http://localhost:${PORT || 3000}/`,
        description: 'Local Server',
      },
    ],
  };