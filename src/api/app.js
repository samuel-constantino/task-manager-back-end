const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const docs = require('../docs');
const { taskRouter } = require('../routes/task');

const app = express();

app.use(express.json());
app.use(cors());
app.use(taskRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

module.exports = { app };
