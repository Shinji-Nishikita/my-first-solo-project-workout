const Pool = require("pg").Pool;

const pool = new Pool({
  user: "macforpizza",
  host: "postgresdb",
  port: "5432",
  database: "workoutdata",
});

module.exports = pool;
