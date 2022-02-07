import { OAuth2Client } from 'google-auth-library';
import { Router } from 'express';
import controller from '@utils/controller';
import Users from '@root/services/Users';

const client = new OAuth2Client(process.env.CLIENT_ID);
const authRouter = Router();

authRouter.post('/api/login', controller(async (req, res) => {
  const { token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });

  const {
    name, email, picture, sub,
  } = ticket.getPayload();

  const targetUser = await Users.getUserById(sub);

  if (!targetUser.length) {
    await Users.registerUser({
      name, email, picture, id: sub,
    });
  }

  res.json({
    name, email, picture, sub,
  });
}));

export default authRouter;
