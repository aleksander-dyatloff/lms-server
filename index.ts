import authRouter from '@routes/auth';
import express from 'express';
import cors from 'cors';
import mysqlBootstrap from './mysql';

const server = express();
const port = process.env.PORT ?? 7777;

require('dotenv').config({ path: '.env.local' });

server.use(cors({
  origin: process.env.CLIENT_DOMAIN,
  optionsSuccessStatus: 200,
}));

server.use(express.json());

server.use(authRouter);

export const connection = mysqlBootstrap();

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
