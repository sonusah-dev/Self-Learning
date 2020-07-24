// REQUIRING DEPENDENCIES
var mongoose = require('mongoose');

// ADDING SCHEMA SETUP
var campgroundsSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

// CREATING COLLECTION OF CAMPGROUND
module.exports = mongoose.model("Campground", campgroundsSchema);