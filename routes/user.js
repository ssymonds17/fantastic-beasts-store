var express = require('express');
var router = express.Router();

module.exports = (app) => {
  app.use('/users', router);

  // Get user by id
  router.get('/:userId', function(req, res, next) {
    try {
      const { userId } = req.params;
      res.send(`user with id: ${userId}`);
    } catch (err) {
      next(err);
    }
  });

  // UPDATE user by id
  router.put('/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      res.send(`Updated user with id: ${userId}`);
    } catch (err) {
      next(err);
    }
  });
};
