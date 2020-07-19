// REQUIRING DEPENDENCIES
const mongoose = require('mongoose')

// CONNECTING WITH MONGODB SERVER
module.exports = mongoose.connect("mongodb://localhost:27017/YelpCampground", { useNewUrlParser: true, useUnifiedTopology: true });