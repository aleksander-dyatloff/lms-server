import { Router } from 'express';
import controller from '@utils/controller';
import Users from '@root/services/Users';

const usersRouter = Router();

usersRouter.get('/api/users', controller(async (req, res) => {
  const users = await Users.getAll();

  if (users) res.status(200).json(users);
}));

export default usersRouter;
