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
    name, email, picture, sub: id,
  } = ticket.getPayload();

  const targetUser = await Users.getUserById(String(id));

  let user;

  if (!targetUser) {
    user = await Users.registerUser({
      name, email, picture, googleId: id,
    });
  }

  res.json({
    name, email, picture, id, _id: user?._id,
  });
}));

export default authRouter;
