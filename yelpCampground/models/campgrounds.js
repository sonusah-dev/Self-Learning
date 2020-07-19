// REQUIRING DEPENDENCIES
const mongoose = require('mongoose');

// ADDING SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comments"
        }
    ]
});

// CREATING COLLECTION OF CAMPGROUND
module.exports = mongoose.model("Campgrounds", campgroundSchema);