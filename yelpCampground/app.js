// DEPENDENCIES FOR OUR APP
const express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    connection = require('./public/connection'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    user = require('./models/users'),
    campgrounds = require('./models/campgrounds'),
    comments = require('./models/comments'),
    seedDb = require('./seed');


// BASIC APP CONFIGURATION
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
seedDb();

// ================================
// PASSPORT IMPORTANT CONFIGURATION
// ================================
app.use(require('express-session')({
    secret: "Knowledge is power",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// PROVIDING CURRENTUSER DETAILS FOR ALL ROUTES
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

// LANDING--ROUTES
app.get("/", (req, res) => {
    res.render("index");
});

// INDEX--CAMPGROUND ROUTE
app.get("/campground", (req, res) => {
    // RENDERING DATA FROM DB AND SENDING TO HOME.EJS
    campgrounds.find({}, (error, allCampgrounds) => {
        if (error) {
            console.log(error);
        } else {
            res.render("campgrounds/campground", { campgrounds: allCampgrounds });
        }
    });
});

// NEW--CAMPGROUND ROUTES
app.get("/campground/new", (req, res) => {
    // DIRECTING TO NEWCAMP.EJS 
    res.render("campgrounds/new");
});

// CREATE--CAMPGROUND ROUTES
app.post("/campground", (req, res) => {
    // RECIEVING DATA FROM FORM AND ASSIGN IT TO VARIABLES
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newcamp = { name: name, image: image, description: description }
    // CREATE A NEW CAMPGROUND AND SAVE TO DATABASE
    campgrounds.create(newcamp, (error, newcampground) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(newcampground);
            // REDIRECT TO CAMPGROUNDS PAGE
            res.redirect("/campground");
        }
    });
});

// SHOW--CAMPGROUND ROUTES
app.get("/campground/:id", (req, res) => {
    // FIND THE CAMPGROUND WITH THE PROVIDED ID
    campgrounds.findById(req.params.id).populate("comments").exec((error, foundCampground) => {
        if (error) {
            console.log(error);
        } else {
            // RENDER SHOW TEMPLATE WITH THAT CAMPGROUND
            res.render("campgrounds/show", { campgrounds: foundCampground });
        }
    });
});

// ========================================================================================================
//                                             COMMENTS ROUTE 
// ========================================================================================================



// NEW--COMMENT ROUTES
app.get("/campground/:id/comment/new", isLoggedIn, (req, res) => {
    campgrounds.findById(req.params.id, (error, campground) => {
        if (error) {
            console.log(error);
        } else {
            res.render("comments/new", { campgrounds: campground })
        }
    });
});

// CREATE--COMMENT ROUTE
app.post("/campground/:id/comment", isLoggedIn, (req, res) => {
    campgrounds.findById(req.params.id, (error, foundCampground) => {
        if (error) {
            console.log(error);
            res.redirect("/campground");
        } else {
            comments.create(req.body.comment, (error, newComment) => {
                if (error) {
                    console.log(error);
                } else {
                    foundCampground.comments.push(newComment);
                    foundCampground.save();
                    res.redirect("/campground/" + foundCampground._id);
                }
            });
        }
    });
});

// =========================
// AUTHENTICATION ROUTES
// =========================

// SHOW--REGISTER FORM
app.get("/register", (req, res) => {
    res.render("Oauth/register");
});

// HANDLE SIGN UP CREDENTIAL
app.post("/register", (req, res) => {
    var newUser = new user({ username: req.body.username });
    user.register(newUser, req.body.password, (error, user) => {
        if (error) {
            console.log(error);
            return res.redirect("register");
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect("/campground");
        })
    })
})

// SHOW--LOGIN FORM
app.get("/login", (req, res) => {
    res.render("Oauth/login");
});

// HANDLE LOGIN CREDENTIALS
app.post("/login", passport.authenticate("local", {
    successRedirect: "/campground",
    failureRedirect: "/login"
}));


// LOGOUT ROUTE
app.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/campground");
});

// =============
// MIDDLEWARE 
// =============
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}




// PORT AND SERVER INFO
app.listen(3000, () => {
    console.log("Yelpcamp server is running on port 3000");
});