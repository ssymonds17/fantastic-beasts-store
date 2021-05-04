const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { SESSION_SECRET } = require('../config');

module.exports = (app) => {
  // Enable CORS to all origins by default
  app.use(cors());

  // Parse JSON from requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Express-session
  app.set('trust proxy', 1); // Trust first proxy
  // Create a session
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
      }
    })
  );

  return app;
};
