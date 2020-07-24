// DEPENDENCIES FOR OUR APP
var express = require('express'),
    router = express.Router({ mergeParams: true }),
    Campground = require('../models/Campground');

// INDEX--CAMPGROUND ROUTE
router.get("/", (req, res) => {
    // RENDERING DATA FROM DB AND SENDING TO HOME.EJS
    Campground.find({}, (error, allCampgrounds) => {
        if (error) {
            console.log(error);
        } else {
            res.render("campgrounds/campground", { campgrounds: allCampgrounds });
        }
    });
});

// NEW--CAMPGROUND ROUTES
router.get("/new", isLoggedIn, (req, res) => {
    // DIRECTING TO NEWCAMP.EJS 
    res.render("campgrounds/new");
});

// CREATE--CAMPGROUND ROUTES
router.post("/", isLoggedIn, (req, res) => {
    // RECIEVING DATA FROM FORM AND ASSIGN IT TO VARIABLES
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    console.log(req.user);
    var newcamp = { name: name, image: image, description: description }
    // CREATE A NEW CAMPGROUND AND SAVE TO DATABASE
    Campground.create(newcamp, (error, newCampground) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(newCampground);
            // REDIRECT TO CAMPGROUNDS PAGE
            res.redirect("/campground");
        }
    });
});

// SHOW--CAMPGROUND ROUTES
router.get("/:id", (req, res) => {
    // FIND THE CAMPGROUND WITH THE PROVIDED ID
    Campground.findById(req.params.id).populate("comments").exec((error, foundCampground) => {
        if (error) {
            console.log(error);
        } else {
            // RENDER SHOW TEMPLATE WITH THAT CAMPGROUND
            res.render("campgrounds/show", { campgrounds: foundCampground });
        }
    });
});

// EDIT--CAMPGROUND ROUTE
router.get("/:id/edit", (req, res) => {
    Campground.findById(req.params.id, (error, foundCampground) => {
        if (error) {
            res.redirect("/campground");
        } else {
            res.render("campgrounds/edit", { campgrounds: foundCampground });
        }
    });
});

// UPDATE--CAMPGROUND ROUTE
router.put("/:id", (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (error, updateCampground) => {
        if (error) {
            res.redirect("/campground");
        } else {
            res.redirect("/campground/" + req.params.id);
        }
    });
});

// DESTROY--CAMPGROUND ROUTE
router.delete("/:id", (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            res.redirect("/campground");
        } else {
            res.redirect("/campground");
        }
    })
})

// MIDDLEWARE
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
