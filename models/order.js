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

  async findOneById(id) {
    try {
      const statement = `SELECT * FROM orders
                        WHERE order_number = $1`;
      const values = [id];

      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw err;
    }
  }

  async findOneByUser(id) {
    try {
      const statement = `SELECT * FROM orders
                        WHERE customer_id = $1`;
      const values = [id];

      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw err;
    }
  }
};
