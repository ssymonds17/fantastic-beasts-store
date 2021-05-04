const express = require('express');
const router = express.Router();

module.exports = (app) => {
  app.use('/auth', router);

  // POST to register user
  router.post('/register', async (req, res, next) => {
    try {
      res.status(200).send('User registered');
    } catch (err) {
      next(err);
    }
  });

  // POST to login user
  router.post('/login', async (req, res, next) => {
    try {
      res.status(200).send('User logged in');
    } catch (err) {
      next(err);
    }
  });
};
