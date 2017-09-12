const pg = require("pg");

interface InsertQuery {
  text: string;
  value: any[];
}

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

async function get(query: string): Promise<any>  {
  const res = await pool.query(query);
  return res.rows;
}

async function mutate(query: InsertQuery): Promise<any> {
  const res = await pool.query(query);
  console.log('res', res)
  return res.rowCount;
}

module.exports = {
  get,
  mutate
};
