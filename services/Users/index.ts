import { connection } from '@root/index';
import UsersService from './types';

const Users = {
  async registerUser(userInfo: UsersService.UserInfo) {
    const user = [userInfo.name, userInfo.email, userInfo.id, userInfo.picture];

    await connection
      .promise()
      .query('INSERT INTO users(name, email, id, picture) VALUES(?, ?, ?, ?)', user);

    return true;
  },

  async getUserById(id: string) {
    const [result] = await connection
      .promise()
      .query<[]>(`SELECT * FROM users WHERE id = '${id}'`);

    return result;
  },

  async getAll() {
    const [result] = await connection
      .promise()
      .query('SELECT * FROM users');

    return result;
  },
};

export default Users;
