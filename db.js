const mongoose = require("mongoose");

// function connectMongoose() {
//   mongoose
//     .connect(
//       "mongodb+srv://admin:admin@todoapp.uinrd.mongodb.net/stonePaperScissor?retryWrites=true&w=majority"
//     )
//     .then(() => console.log("Connected!Db"))
//     .catch((err) => console.error(err));
// }
function connectMongoose() {
  mongoose
    .connect("mongodb://localhost:27017/StonePaperScissor")
    .then(() => console.log("Connected!Db"))
    .catch((err) => console.error(err));
}

module.exports = connectMongoose;
