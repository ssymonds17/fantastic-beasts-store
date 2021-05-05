const db = require('../db');

module.exports = class OrderModel {
  async findAll() {
    try {
      const statement = `SELECT * FROM orders`;
      const values = [];

      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows;
      }
      return [];
    } catch (err) {
      throw err;
    }
  }
};
