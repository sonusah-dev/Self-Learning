const mongoose = require("mongoose"),
  Campground = require("./models/Campgrounds"),
  Comment = require("./models/Comments"),
  User = require("./models/Users");

mongoose.connect("mongodb://localhost:27017/Schema", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CRUD OPERATION FOR CAMPGROUNDS

Campground.create(
  {
    name: "Himalaya",
    image: "https://www.mensjournal.com/wp-content/uploads/2015/02/shutterstock_242371765.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    author: {
      id: 1,
      username: "Sonu",
    },
  },
  (err, campground) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(campground);
    }
  }
);

// CRUD OPERATION FOR COMMENTS

Comment.create(
  {
    text: "Its Awesome",
    author: "SONU",
  },
  (err, comment) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(comment);
    }
  }
);

// CRUD OPERATION FOR USERS

User.create(
  {
    username: "Sonu",
    password: "password",
  },
  (err, user) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(user);
    }
  }
);
