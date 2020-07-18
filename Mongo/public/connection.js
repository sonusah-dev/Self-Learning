// REQUIRING DEPENDENCIES
const mongoose = require('mongoose');

//  CONNECTING WITH MONGODB
module.exports = mongoose.connect("mongodb://localhost:27017/Association", { useNewUrlParser: true, useUnifiedTopology: true });
