// DEPENDENCIES FOR OUR APP
var express = require("express"),
  app = express(),
  bodyparser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  localStrategy = require("passport-local"),
  methodOverride = require("method-override"),
  Campground = require("./models/Campground"),
  Comment = require("./models/Comment"),
  User = require("./models/User"),
  seedDb = require("./seed");

// IMPORT ROUTES
var OAuthRoutes = require("./routes/OAuth"),
  campgroundRoutes = require("./routes/campground"),
  commentRoutes = require("./routes/comment");

// BASIC APP CONFIGURATION
mongoose.connect("mongodb://localhost:27017/yelpCamp_new", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDb();

// PASSPORT IMPORTANT CONFIGURATION
app.use(
  require("express-session")({
    secret: "Knowledge is power",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// PROVIDING CURRENTUSER DETAILS FROM ALL ROUTES
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//IMPORT ROUTES
app.use("/", OAuthRoutes);
app.use("/campground", campgroundRoutes);
app.use("/campground/:id/comment", commentRoutes);

// PORT AND SERVER INFO
app.listen(3000, () => {
  console.log("Yelpcamp server is running on port 3000");
});
