const authRouter = require('./auth');
const orderRouter = require('./order');
const productRouter = require('./product');
const userRouter = require('./user');

module.exports = async (app) => {
  authRouter(app);
  orderRouter(app);
  productRouter(app);
  userRouter(app);
};
