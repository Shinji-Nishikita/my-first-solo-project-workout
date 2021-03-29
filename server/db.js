const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "macforpizza",
  host: DB_URL,
  port: "5432",
  database: "workoutdata",
});

module.exports = pool;
