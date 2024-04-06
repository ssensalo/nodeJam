const { Pool } = require('pg');

const pool = new Pool({
  user: 'dev_psql',
  password: '12345',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'node_jam'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};