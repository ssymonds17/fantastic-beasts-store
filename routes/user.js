const express = require('express');
const router = express.Router();

module.exports = (app) => {
  app.use('/users', router);

  // Get user by id
  router.get('/:userId', async (req, res, next) => {
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

  // DELETE user record by id
  router.delete('/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      res.send(`User deleted with id: ${userId}`);
    } catch (err) {
      next(err);
    }
  });
};
