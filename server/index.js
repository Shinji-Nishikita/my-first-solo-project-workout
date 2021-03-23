const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//POST
app.post("/places", async (req, res) => {
  try {
    const { destination } = req.body;
    const newPlace = await pool.query(
      "INSERT INTO place (destination) VALUES ($1) RETURNING *",
      [destination]
    );
    res.json(newPlace.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//GET(allplace)
app.get("/places", async (req, res) => {
  try {
    const allPlaces = await pool.query("SELECT * FROM place");
    res.json(allPlaces.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//GET(selectedplace)
app.get("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const selectedPlace = await pool.query(
      "SELECT * FROM place WHERE place_id = $1",
      [id]
    );
    res.json(selectedPlace.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//UPDATE
app.put("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { destination } = req.body;
    const updatedPlace = await pool.query(
      "UPDATE place SET destination = $1 WHERE place_id = $2",
      [destination, id]
    );

    res.json("Place was updted!");
  } catch (err) {
    console.error(err.message);
  }
});

//DELETE
app.delete("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { destination } = req.body;
    const deletedPlace = await pool.query(
      "DELETE FROM place WHERE place_id = $1",
      [id]
    );

    res.json("Place was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
