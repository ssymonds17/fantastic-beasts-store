const createError = require('http-errors');
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

module.exports = class UserService {
  // Get one user profile based on id
  async getOne(data) {
    const { id } = data;

    try {
      // Check if user already exists
      const user = await UserModelInstance.findOneById(id);

      // If user doesn't exist then reject
      if (!user) {
        throw createError(404, 'User record not found');
      }

      return user;
    } catch (err) {
      throw err;
    }
  }

  async updateOne(data) {
    try {
      const user = await UserModelInstance.update(data);
      return user;
    } catch (err) {
      throw err;
    }
  }

  async deleteOne(userId) {
    try {
      const user = await UserModelInstance.delete(userId);
      return user;
    } catch (err) {
      throw err;
    }
  }
};
