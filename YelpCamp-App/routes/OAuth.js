// DEPENDENCIES FOR OUR APP
var express = require("express"),
  router = express.Router({ mergeParams: true }),
  passport = require("passport"),
  User = require("../models/User");

// LANDING--ROUTES
router.get("/", (req, res) => {
  res.render("index");
});

// SHOW--REGISTER FORM
router.get("/register", (req, res) => {
  res.render("Oauth/register");
});

// HANDLE SIGN UP CREDENTIAL
router.post("/register", (req, res) => {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (error, user) => {
    if (error) {
      console.log(error);
      return res.redirect("register");
    }
    passport.authenticate("local")(req, res, () => {
      res.redirect("/campground");
    });
  });
});

// SHOW--LOGIN FORM
router.get("/login", (req, res) => {
  res.render("Oauth/login");
});

// HANDLE LOGIN CREDENTIALS
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/campground",
    failureRedirect: "/login"
  }),
  function (req, res) { }
);

// router.post('/login',
//   passport.authenticate('local', { failureRedirect: '/login', }),
//   function (req, res) {
//     res.redirect('/');
//   }
// );

// LOGOUT ROUTE
router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/campground");
});

// MIDDLEWARE
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
