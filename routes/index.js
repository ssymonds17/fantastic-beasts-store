const express = require('express');
const router = express.Router();
const db = require('../db');

async function getAllProducts() {
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

// Get home page
router.get('/', async (req, res, next) => {
  try {
    const response = await getAllProducts();
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
