const express = require('express');
const app = express();
const path = require('path');
const { PORT } = require('./config');
const loaders = require('./loaders');

async function startServer() {
  // Initialise application loaders
  loaders(app);

  // Serve static files
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
