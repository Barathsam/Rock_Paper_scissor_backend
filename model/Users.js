let mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: String,
  status: String,
});

module.exports = mongoose.model("User", userschema);
