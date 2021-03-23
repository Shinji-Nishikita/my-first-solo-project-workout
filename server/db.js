const Pool = require("pg").Pool;

const pool = new Pool({
    user: "macforpizza",
    password: "travelling",
    host: "localhost",
    port: 5432,
    database: "travel"
});

module.exports = pool;