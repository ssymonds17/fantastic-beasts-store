const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local');

const AuthService = require('../services/authService');
const AuthServiceInstance = new AuthService();
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

const { GOOGLE } = require('../config');

module.exports = (app) => {
  // Initialise passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Set method to serialise cookie data
  passport.serializeUser((user, done) => {
    console.log('serialise', user);
    done(null, user.id);
  });

  // Set method to deserialise cookie data
  passport.deserializeUser((id, done) => {
    console.log('deserialize');

    UserModelInstance.findOneById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(new Error(`User with the id ${id} does not exist`));
      });
  });

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await AuthServiceInstance.login({
          email: username,
          password
        });
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE.CONSUMER_KEY,
        clientSecret: GOOGLE.CONSUMER_SECRET,
        callbackURL: GOOGLE.CALLBACK_URL
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await AuthServiceInstance.googleLogin(profile);
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  return passport;
};
