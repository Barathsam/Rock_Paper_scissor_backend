const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
let userRoutes = require("./routes/usersRoutes");
const db = require("./db");
const app = express();
app.use(express.json());
app.use(cors());

db();
app.use("/users", userRoutes);

app.listen(3002, () => {
  return console.log("localHost connected");
});

module.exports = app;
