const expressLoader = require('./express');
const passportLoader = require('./passport');
const routeLoader = require('../routes');
const swaggerLoader = require('./swagger');
const path = require('path');

module.exports = async (app) => {
  // Load express middlewares
  const expressApp = await expressLoader(app);

  // // Load Passport middleware
  const passport = await passportLoader(expressApp);

  // Load route handlers
  await routeLoader(app, passport);

  // Load Swagger documentation
  await swaggerLoader(app);

  // Serve static files
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });

  // Error handler
  app.use((err, req, res, next) => {
    const message = err.message;
    const status = err.status || 500;

    return res.status(status).send({ message });
  });
};
