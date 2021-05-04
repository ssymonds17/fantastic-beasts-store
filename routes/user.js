var express = require('express');
var router = express.Router();

module.exports = (app) => {
  app.use('/users', router);

  /* GET user by id */
  router.get('/:userId', function(req, res, next) {
    const { userId } = req.params;
    res.send(`user with id: ${userId}`);
  });
};
