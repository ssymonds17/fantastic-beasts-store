const express = require('express');
const app = express();
const { PORT } = require('./config');
const loaders = require('./loaders');

async function startServer() {
  // Initialise application loaders
  loaders(app);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
