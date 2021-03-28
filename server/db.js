const Pool = require("pg").Pool;

const pool = new Pool({
  user: "macforpizza",
  host: "postgresql-cylindrical-79933",
  port: "5432",
  database: "workoutdata",
});

module.exports = pool;
