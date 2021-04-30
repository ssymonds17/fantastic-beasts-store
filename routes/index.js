const express = require('express');
const router = express.Router();
const db = require('../db');

// Get home page
router.get('/', async (req, res, next) => {
  res.send('Hello world');
});

module.exports = router;
