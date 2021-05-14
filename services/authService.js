const createError = require('http-errors');
const bcrypt = require('bcryptjs');
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

      await this.hashPassword(data);

      // If user doesn't already exist then create new user record
      return await UserModelInstance.create(data);
    } catch (err) {
      throw createError(500, err);
    }
  }

  async login(data) {
    const { email, password } = data;

    try {
      const user = await UserModelInstance.findOneByEmail(email);

      // If no user found then reject
      if (!user) {
        throw createError(401, 'Incorrect username or password');
      }

      // If user exists then check passwords match
      if (user.password !== password) {
        throw createError(401, 'Incorrect username or password');
      }

      return user;
    } catch (err) {
      throw createError(500, err);
    }
  }

  async hashPassword(data) {
    const password = data.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    data.password = hashedPassword;
    return data;
  }
};
