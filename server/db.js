const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "macforpizza",
  host: process.env.DB_URL,
  port: "5432",
  database: "workoutdata",
});
console.log("process.env.DB_URLは", process.env.DB_URL);

module.exports = pool;
