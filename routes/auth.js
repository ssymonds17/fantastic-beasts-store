const express = require('express');
const router = express.Router();

const AuthService = require('../services/authService');
const AuthServiceInstance = new AuthService();
const UserService = require('../services/userService');
const UserServiceInstance = new UserService();

module.exports = (app, passport) => {
  app.use('/api/v1/auth', router);

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
  router.post(
    '/login',
    passport.authenticate('local'),
    async (req, res, next) => {
      try {
        const { username, password } = req.body;

        const response = await AuthServiceInstance.login({
          email: username,
          password
        });

        res.status(200).send(response);
      } catch (err) {
        next(err);
      }
    }
  );

  // Google Login Endpoint
  router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile'] })
  );

  // Google Login Callback Endpoint
  router.get(
    '/google/redirect',
    passport.authenticate('google', {
      failureRedirect: 'https://fantastic-beasts-store.herokuapp.com/login'
    }),
    async (req, res) => {
      req.session.user = req.user;
      res.redirect(
        'https://fantastic-beasts-store.herokuapp.com?id=' + req.user.id
      );
    }
  );

  router.get('/logged_in', async (req, res, next) => {
    try {
      const id = req._parsedOriginalUrl.query.slice(3);
      const user = await UserServiceInstance.getOne({ id });
      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  });
};
