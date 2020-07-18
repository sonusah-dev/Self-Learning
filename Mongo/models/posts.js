// MONGOOSE DEPENDENCIES
const mongoose = require("mongoose");

// SCHEMA CONFIG FOR DB
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// CREATING DB COLLECTION FOR INSTANCE
module.exports = mongoose.model("Post", postSchema);