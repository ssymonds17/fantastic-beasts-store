const expressLoader = require('./express');
const passportLoader = require('./passport');
const routeLoader = require('../routes');
const swaggerLoader = require('./swagger');

module.exports = async (app) => {
  // Load express middlewares
  const expressApp = await expressLoader(app);

  // // Load Passport middleware
  const passport = await passportLoader(expressApp);

  // Load route handlers
  await routeLoader(app, passport);

  // Load Swagger documentation
  await swaggerLoader(app);

  app.get('*', (req, res) => {
    res.send('404 Resource does not exist');
  });

  // Error handler
  app.use((err, req, res, next) => {
    const { message, status } = err;

    return res.status(status).send({ message });
  });
};
