// DEPENDENCIES FOR OUR APP
var express = require("express"),
  router = express.Router({ mergeParams: true }),
  Campground = require("../models/Campground"),
  Comment = require("../models/Comment");

// NEW--COMMENT ROUTES
router.get("/new", isLoggedIn, (req, res) => {
  Campground.findById(req.params.id, (error, campground) => {
    if (error) {
      console.log(error);
    } else {
      res.render("comments/new", { campgrounds: campground });
    }
  });
});

// CREATE--COMMENT ROUTE
router.post("/", isLoggedIn, (req, res) => {
  Campground.findById(req.params.id, (error, foundCampground) => {
    if (error) {
      console.log(error);
      res.redirect("/campground");
    } else {
      Comment.create(req.body.comment, (error, newComment) => {
        if (error) {
          console.log(error);
        } else {
          // ADD USERNAME AND ID TO COMMENT
          // comments.author.id = req.user._id;s
          // comments.author.username = req.user.username;
          // // SAVE COMMENT
          // comments.save();
          foundCampground.comments.push(newComment);
          foundCampground.save();
          res.redirect("/campground/" + foundCampground._id);
        }
      });
    }
  });
});

// MIDDLEWARE
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
