const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const db = require("./db");

app.use(cors());

const PORT = 3000;
const clientPath = path.resolve(__dirname, "../client/dist");

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
  next();
});

app.get("/", (req, res) => {
  //needed later
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});


app.get("/api/links", db.getLinks);
app.get("/api/links/:id", db.getLinkById);
app.post("/api/links", db.createLink);
app.put("/api/links/:id", db.updateLink);
app.delete("/api/links/:id", db.deleteLink);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


