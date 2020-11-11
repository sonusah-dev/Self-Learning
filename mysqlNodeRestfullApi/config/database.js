const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.databasePort,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
});

module.exports = pool;
