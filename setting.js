const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// client.connect();

// client.query(
//   "CREATE TABLE mydata(id SERIAL PRIMALY KEY, name text, age int, weight int, height int);",
//   (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//       console.log(JSON.stringify(row));
//     }
//     client.end();
//   }
// );
