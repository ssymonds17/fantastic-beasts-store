const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,
  DB: {
    PGHOST: process.env.PGHOST,
    PGUSER: process.env.PGUSER,
    PGDATABASE: process.env.PGDATABASE,
    PGPASSWORD: process.env.PGPASSWORD,
    PGPORT: process.env.PGPORT
  },
  GOOGLE: {
    CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    CONSUMER_KEY: process.env.GOOGLE_CONSUMER_KEY,
    CONSUMER_SECRET: process.env.GOOGLE_CONSUMER_SECRET
  }
};
