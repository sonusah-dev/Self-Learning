// REQUIRING DEPENDENCIES
var mongoose = require("mongoose");

// ADDING SCHEMA SETUP
var commentsSchema = new mongoose.Schema({
  text: String,
  author: String
});

// CREATING COLLECTION OF CAMPGROUND
module.exports = mongoose.model("Comment", commentsSchema);
