const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
  // Enable CORS to all origins by default
  app.use(cors());

  // Parse JSON from requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
