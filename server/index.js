const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;
const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "build")));

console.log("Database_URL", process.env.DATABASE_URL);
// POST;
app.post("/datas", async (req, res) => {
  try {
    const { name, age, weight, height } = req.body;
    console.log(age);
    const newData = await pool.query(
      "INSERT INTO mydata (name, age, weight, height) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, age, weight, height]
    );
    res.json(newData.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//GET(allplace)
app.get("/datas", async (req, res) => {
  try {
    const alldatas = await pool.query("SELECT * FROM mydata");
    res.json(alldatas.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
