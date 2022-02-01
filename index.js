require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const port = process.env.PORT ?? 7777;
const authRouter = require('./routes/auth/index');
const cors = require('cors');

const server = express();

server.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

server.use(express.json());

server.use(authRouter);

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});