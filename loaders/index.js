const expressLoader = require('./express');
const routeLoader = require('../routes');

module.exports = async (app) => {
  // Load express middlewares
  const expressApp = await expressLoader(app);

  // Load route handlers
  await routeLoader(app);

  // Error handler
  app.use((err, req, res, next) => {
    const { message, status } = err;

    return res.status(status).send({ message });
  });
};
