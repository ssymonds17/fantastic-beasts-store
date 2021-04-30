const express = require('express');
const router = express.Router();
const db = require('../db');

// Get home page
router.get('/', async (req, res, next) => {
  try {
    const statement = `SELECT * FROM products`;
    const values = [];

    const response = await db.query(statement, values);

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
