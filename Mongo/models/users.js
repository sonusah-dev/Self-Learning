// MONGOOSE DEPENDENCIES
const mongoose = require("mongoose");

// SCHEMA CONFIG FOR DB
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

// CREATING DB COLLECTION FOR INSTANCE
module.exports = mongoose.model("User", userSchema);
