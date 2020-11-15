import mysql from 'mysql';
import fs from 'fs';

require('dotenv').config();


const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
});

const db = () => mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME
});

const models = fs.readdirSync(`${__dirname}/tables`)
  .map((files) => files.slice(0, -3))
  .filter((table) => table !== 'index');

const tablesPromise = models.map(async (model) => {
  return require(`./tables/${model}`);
});

export { connection, db, tablesPromise };