import { OAuth2Client } from 'google-auth-library';
import { Router } from 'express';
import controller from '@utils/controller';

const client = new OAuth2Client(process.env.CLIENT_ID);
const authRouter = Router();

authRouter.post('/api/login', controller(async (req, res) => {
  const { token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });

  const {
    name, email, picture, iss,
  } = ticket.getPayload();

  req.session.userId = iss;

  res.json({
    name, email, picture,
  });
}));

export default authRouter;
