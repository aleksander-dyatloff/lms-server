import authRouter from '@routes/auth/index';

const express = require('express');
const cors = require('cors');

const server = express();
const port = process.env.PORT ?? 7777;

require('dotenv').config({ path: '.env.local' });

server.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

server.use(express.json());

server.use(authRouter);

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
