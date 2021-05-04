const db = require('../db');

module.exports = class UserModel {
  // Create a new user record
  async create(data) {
    try {
      const { id, first_name, last_name, email, password, created } = data;
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
};
