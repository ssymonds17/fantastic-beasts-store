const express = require('express');
const app = express();
const { PORT } = require('./config');
const loaders = require('./loaders');

async function startServer() {
  // Initialise application loaders
  loaders(app);

  app.get('*', (req, res) => {
    res.send('404 Resource does not exist');
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
