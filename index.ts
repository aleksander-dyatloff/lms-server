import authRouter from '@routes/auth';
import usersRouter from '@routes/users';
import express from 'express';
import cors from 'cors';
import lessonsRouter from '@routes/lessons';

const server = express();
const port = process.env.PORT ?? 7777;

require('dotenv').config({ path: '.env.local' });

server.use(cors({
  origin: process.env.CLIENT_DOMAIN,
  optionsSuccessStatus: 200,
}));

require('./database');

server.use(express.json());

server.use(authRouter, usersRouter, lessonsRouter);

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
