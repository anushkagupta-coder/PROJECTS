const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  title: String,
  author: String,
  reviews: [String]
});

module.exports = mongoose.model("Book", bookSchema);
