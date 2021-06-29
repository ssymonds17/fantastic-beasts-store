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

  async getOneById(id) {
    try {
      const order = await OrderModelInstance.findOneById(id);

      // If no order exists then reject
      if (!order) {
        throw createError(404, 'Order not found');
      }

      return order;
    } catch (err) {
      throw err;
    }
  }

  async getOneByUser(id) {
    try {
      const order = await OrderModelInstance.findOneByUser(id);

      // If no order exists then reject
      if (!order) {
        throw createError(404, 'No orders found');
      }

      return order;
    } catch (err) {
      throw err;
    }
  }

  async createOne(data) {
    try {
      // Check to see how many orders currently exist so we can automatically generate an new order_number (total records plus one)
      const count = await this.getOrderTotal();

      // Check to see if the order already exists
      const order = await OrderModelInstance.findOneById(count);

      // If order already exists then reject
      if (order) {
        createError(409, 'Order already exists');
      }

      // If order doesn't already exist then create new order record
      return await OrderModelInstance.create(data, count);
    } catch (err) {
      throw createError(500, err);
    }
  }

  async getOrderTotal() {
    try {
      const orderCount = await OrderModelInstance.findNumberOfOrders();

      const { count } = orderCount[0];
      return Number(count) + 1;
    } catch (err) {
      throw err;
    }
  }
};
