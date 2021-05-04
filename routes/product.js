const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product');
const ProductModelInstance = new ProductModel();

module.exports = (app) => {
  app.use('/products', router);

  // Get home page
  router.get('/', async (req, res, next) => {
    try {
      const response = await ProductModelInstance.findAll();
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};
