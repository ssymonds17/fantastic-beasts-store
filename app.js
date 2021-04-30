const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config');
const indexRouter = require('./routes/index');

async function startServer() {
  // Enable CORS to all origins by default
  app.use(cors());

  // Parse JSON from requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Access route handlers
  app.use('/', indexRouter);

  // Error handler
  app.use((err, req, res, next) => {
    const { message, status } = err;

    return res.status(status).send({ message });
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
