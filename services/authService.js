const createError = require('http-errors');
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

module.exports = class AuthService {
  async register(data) {
    const { email } = data;

    try {
      // Check to see if the user already exists
      const user = await UserModelInstance.findOneByEmail(email);

      // If user already exists then reject
      if (user) {
        throw createError(409, 'Email already in use');
      }

      // If user doesn't already exist then create new user record
      return await UserModelInstance.create(data);
    } catch (err) {
      throw createError(500, err);
    }
  }
};
