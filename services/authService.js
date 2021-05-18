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

  async googleLogin(profile) {
    const { id, name } = profile;
    const { givenName, familyName } = name;

    try {
      // Check if user exists
      const user = await UserModelInstance.findOneByGoogleId(id);

      // If no user found then create a new user
      if (!user) {
        const first_name = givenName.toLowerCase();
        const last_name = familyName.toLowerCase();
        const emailPlaceholder = first_name + last_name + id + '@email.com';

        const data = {
          first_name,
          last_name,
          email: emailPlaceholder,
          google_id: id
        };
        return await UserModelInstance.create(data);
      }

      // If user does exist then return the user
      return user;
    } catch (err) {
      throw createError(500, err);
    }
  }
};
