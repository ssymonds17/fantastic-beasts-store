const db = require('../db');
const moment = require('moment');
moment().format();
const uuid = require('uuid');

module.exports = class UserModel {
  // Create a new user record
  async create(data) {
    try {
      const { first_name, last_name, email, password } = data;
      const created = moment.utc().toISOString();
      const id = uuid.v4();
      const statement = `INSERT INTO customers VALUES ($1, $2, $3, $4, $5, $6)`;
      const values = [id, first_name, last_name, email, password, created];

      // Execute query
      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOneByEmail(email) {
    try {
      const statement = `SELECT * FROM customers WHERE email = $1`;
      const values = [email];

      // Execute query
      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOneById(id) {
    try {
      // Set query statement and values
      const statement = `SELECT * FROM customers WHERE id = $1`;
      const values = [id];

      // Execute query
      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows[0];
      }
      return null;
    } catch (err) {
      throw new Error(err);
    }
  }
};
