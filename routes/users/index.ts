import { Router } from 'express';
import controller from '@utils/controller';
import Users from '@root/services/Users';

const usersRouter = Router();

usersRouter.get('/api/users', controller(async (req, res) => {
  const users = await Users.getAll();

  if (users) res.status(200).json(users);
}));

usersRouter.post('/api/users/personal', controller(async (req, res) => {
  const { userId } = req.body;

  if (!userId) res.status(404);

  const user = await Users.getUserById(userId);

  if (user) res.status(200).json(user);
}));

export default usersRouter;
