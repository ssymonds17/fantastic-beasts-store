const db = require('../db');

module.exports = class ProductModel {
  async findAll() {
    try {
      const statement = `SELECT * FROM products`;
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
