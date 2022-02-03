import mysql from 'mysql2';

const mysqlBootstrap = () => {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: Number(process.env.MYSQL_PORT),
    password: process.env.MYSQL_PASSWORD,
  });

  connection.connect((err) => {
    if (err) return console.log('Failed connect to MySQL', err);

    console.log('Connected to MySQL server');
  });

  connection.end((err) => {
    if (err) return console.log('Failed close connect to MySQL', err);

    console.log('Connection to MySQL successfully closed');
  });

  return connection;
};

export default mysqlBootstrap;
