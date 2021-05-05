const createError = require('http-errors');
const OrderModel = require('../models/order');
const OrderModelInstance = new OrderModel();

module.exports = class OrderService {
  async getAll() {
    try {
      // Load orders
      const orders = await OrderModelInstance.findAll();

      return orders;
    } catch (err) {
      throw err;
    }
  }
};
