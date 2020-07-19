// REQUIRING DEPENDENCIES
const mongoose = require('mongoose');

// ADDING SCHEMA SETUP
const commentSchema = new mongoose.Schema({
    text: String,
    author: String,
});

// CREATING COLLECTION OF CAMPGROUND
module.exports = mongoose.model("Comments", commentSchema);