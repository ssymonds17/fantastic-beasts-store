const productRouter = require('./product');
const userRouter = require('./user');

module.exports = async (app) => {
  productRouter(app);
  userRouter(app);
};
