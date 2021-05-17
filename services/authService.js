const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

module.exports = class AuthService {
  async register(data) {
    const { email, password } = data;

    try {
      // Check to see if the user already exists
      const user = await UserModelInstance.findOneByEmail(email);

      // If user already exists then reject
      if (user) {
        throw createError(409, 'Email already in use');
      }

      if (!email || !password) {
        throw createError(409, 'A valid email and password is required');
      }

      await this.hashPassword(data);

      // If user doesn't already exist then create new user record
      return await UserModelInstance.create(data);
    } catch (err) {
      throw createError(500, err);
    }
  }

  async login(data) {
    // TODO Compare password with hashed password using bcrypt. See tutorial
    const { email, password } = data;

    try {
      const user = await UserModelInstance.findOneByEmail(email);

      // If no user found then reject
      if (!user) {
        throw createError(401, 'Incorrect username or password');
      }

      // Compare password provided by the user and what is returned from the database using bcrypt
      const validPassword = await this.comparePasswords(
        password,
        user.password
      );

      // If passwords do not match then return error
      if (!validPassword) {
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

  async comparePasswords(clientPassword, dbPassword) {
    try {
      if (await bcrypt.compare(clientPassword, dbPassword)) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      throw createError(401, 'Incorrect username or password');
    }
  }
};
