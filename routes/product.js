const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const ProductModel = require('../models/product');
const ProductModelInstance = new ProductModel();

module.exports = (app) => {
  app.use('/products', router);

  // Get all products
  router.get('/', async (req, res, next) => {
    try {
      const response = await ProductModelInstance.findAll();
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // Get product by id
  router.get('/:productId', async (req, res, next) => {
    try {
      const { productId } = req.params;

      const response = await ProductModelInstance.findOne(productId);

      // If no product found then reject
      if (!response) {
        throw createError(404, 'Product not found');
      }

      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};
