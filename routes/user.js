const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const UserService = require('../services/userService');
const UserServiceInstance = new UserService();

module.exports = (app) => {
  app.use('/api/v1/users', router);

  // Get user by id
  router.get('/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      const response = await UserServiceInstance.getOne({ id: userId });
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // GET user by email
  router.get('/check/:email', async (req, res, next) => {
    try {
      const { email } = req.params;
      const response = await ModelUserInstance.findOneByEmail(email);

      // If no user found then reject
      if (!response) {
        throw createError(404, 'User not found');
      }

      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // UPDATE user by id
  router.put('/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      const data = req.body;

      const response = UserServiceInstance.updateOne({ id: userId, ...data });
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // DELETE user record by id
  router.delete('/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      const response = UserServiceInstance.deleteOne(userId);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};
