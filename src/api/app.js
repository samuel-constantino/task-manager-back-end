const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const docs = require('../docs');
const { router } = require('../routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));

module.exports = { app };
