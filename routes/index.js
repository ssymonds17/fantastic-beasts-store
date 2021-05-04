const authRouter = require('./auth');
const orderRouter = require('./order');
const productRouter = require('./product');
const userRouter = require('./user');

module.exports = async (app, passport) => {
  authRouter(app, passport);
  orderRouter(app);
  productRouter(app);
  userRouter(app);
};
