const { Pool } = require('pg');
const { DB } = require('../config');

const devConfig = {
  user: DB.PGUSER,
  host: DB.PGHOST,
  database: DB.PGDATABASE,
  password: DB.PGPASSWORD,
  port: DB.PGPORT
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
};

const pool = new Pool(
  process.env.NODE_ENV === 'production' ? proConfig : devConfig
);

module.exports = {
  query: (text, params) => pool.query(text, params)
};
