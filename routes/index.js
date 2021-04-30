const productRouter = require('./product');

// 1. Create individual routes files for Customers/Products/Orders
// 2. Extract existing get request and house in necessary folder
// 3. Create corresponding model/service folder to house sql query function (i.e. getAll Products)

module.exports = async (app) => {
  productRouter(app);
};
