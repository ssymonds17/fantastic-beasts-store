const authRouter = require('./auth');
const productRouter = require('./product');
const userRouter = require('./user');

module.exports = async (app) => {
  authRouter(app);
  productRouter(app);
  userRouter(app);
};
