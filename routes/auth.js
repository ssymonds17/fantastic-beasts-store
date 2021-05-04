const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

module.exports = (app) => {
  app.use('/auth', router);

  // POST to register user
  router.post('/register', async (req, res, next) => {
    try {
      // Check if user exists TODO
      const data = req.body;
      const response = await UserModelInstance.create(data);
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
