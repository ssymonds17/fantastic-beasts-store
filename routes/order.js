const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderService');
const OrderServiceInstance = new OrderService();

module.exports = (app) => {
  app.use('/orders', router);

  // GET all orders
  router.get('/', async (req, res, next) => {
    try {
      const response = await OrderServiceInstance.getAll();
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // GET order by id
  router.get('/:orderId', async (req, res, next) => {
    try {
      const { orderId } = req.params;
      res.send(`Order with id: ${orderId}`);
    } catch (err) {
      next(err);
    }
  });

  // GET orders by user id
  router.get('/user/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      res.send(`Orders from user with id: ${userId}`);
    } catch (err) {
      next(err);
    }
  });

  // POST create new order
  router.post('/', async (req, res, next) => {
    try {
      res.send('New order created');
    } catch (err) {
      next(err);
    }
  });
};
