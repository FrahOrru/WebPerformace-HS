// /server/app.js

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../dist")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const compression = require("compression");

app.use(compression());

app.set("etag", "strong");

const fs = require("fs");

app.post("/api/reservations", (req, res) => {
  const { data } = req.body;

  fs.appendFile("reservations.txt", `${JSON.stringify(data)}\n`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving data");
    } else {
      res.status(200).send("Data saved successfully");
    }
  });
});

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("reservations.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS reservations (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT)"
  );

  app.post("/api/reservations", (req, res) => {
    const { data } = req.body;

    db.run(
      "INSERT INTO reservations (data) VALUES (?)",
      JSON.stringify(data),
      function (err) {
        if (err) {
          console.error(err);
          res.status(500).send("Error saving data to database");
        } else {
          res.status(200).send("Data saved to SQLite database");
        }
      }
    );
  });
});

process.on("exit", () => {
  db.close();
});
