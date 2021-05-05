const db = require('../db');
const moment = require('moment');
moment().format();

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
        return result.rows;
      }

      return null;
    } catch (err) {
      throw err;
    }
  }

  async create(data, count) {
    try {
      const { customer_id, total } = data;
      const order_date = moment.utc().toISOString();
      // Use the existing number of order records to generate a new order number for this new one
      const order_number = count;

      const statement = `INSERT INTO orders VALUES ($1, $2, $3, $4)`;
      const values = [order_number, order_date, total, customer_id];

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

  async findNumberOfOrders() {
    try {
      const statement = `SELECT COUNT(*) FROM orders`;
      const values = [];

      // Execute query
      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows;
      }
      return null;
    } catch (err) {
      throw new Error(err);
    }
  }
};
