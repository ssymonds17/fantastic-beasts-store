const passport = require('passport');
const LocalStrategy = require('passport-local');

const AuthService = require('../services/authService');
const AuthServiceInstance = new AuthService();

module.exports = (app) => {
  // Initialise passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Set method to serialise cookie data
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Set method to deserialise cookie data
  passport.deserializeUser((id, done) => {
    done(null, { id });
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

  return passport;
};
