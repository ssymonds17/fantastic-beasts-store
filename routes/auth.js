const express = require('express');
const router = express.Router();
const AuthService = require('../services/authService');
const AuthServiceInstance = new AuthService();

module.exports = (app) => {
  app.use('/auth', router);

  // POST to register user
  router.post('/register', async (req, res, next) => {
    try {
      const data = req.body;
      const response = await AuthServiceInstance.register(data);
      res.status(200).send(response);
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
