var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    }
  ],
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    username: {
      type: String,
      require: true,
    }
  }
});

module.exports = mongoose.model("Campgrounds", campgroundSchema);
