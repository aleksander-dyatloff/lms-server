import UserModel from '@root/models/User';
import UsersService from './types';

const Users = {
  async registerUser(userInfo: UsersService.UserInfo) {
    const createdUser = new UserModel({
      ...userInfo,
    });

    await createdUser.save();

    return createdUser;
  },

  async getUserById(id: string) {
    const user = await UserModel.findOne({
      googleId: id,
    });

    return user;
  },

  async getAll() {
    return [];
  },
};

export default Users;
