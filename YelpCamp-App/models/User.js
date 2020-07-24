// REQUIRING DEPENDENCIES
const mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

// ADDING SCHEMA SETUP
var userSchema = new mongoose.Schema(
    {
        username: String,
        password: String
    }
);

// APPLYING ALL THE METHODS OF PASSWORD-LOCAL-MONGOOSE MODULE TO OUR SCHEMA
userSchema.plugin(passportLocalMongoose);

// CREATING COLLECTION OF CAMPGROUND
module.exports = mongoose.model("User", userSchema);