const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const { Router } = require('express');
const authRouter = Router();

authRouter.post('/api/login', async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });

    const { name, email, picture } = ticket.getPayload();

    res.json({
      name, email, picture,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
});

module.exports = authRouter