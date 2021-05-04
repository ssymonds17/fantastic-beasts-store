const express = require('express');
const router = express.Router();
const ProductService = require('../services/productService');
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
  app.use('/products', router);

  // Get all products
  router.get('/', async (req, res, next) => {
    try {
      const response = await ProductServiceInstance.getAll();
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // Get product by id
  router.get('/:productId', async (req, res, next) => {
    try {
      const { productId } = req.params;
      const response = await ProductServiceInstance.getOne(productId);

      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};
