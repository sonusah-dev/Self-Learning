// DEPENDENCIES FOR OUR APP
const express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    connection = require('./public/connection'),
    campgrounds = require('./models/campgrounds'),
    comments = require('./models/comments'),
    seedDb = require('./seed');


// BASIC APP CONFIGURATION
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
seedDb();


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
app.get("/campground/:id/comment/new", (req, res) => {
    campgrounds.findById(req.params.id, (error, campground) => {
        if (error) {
            console.log(error);
        } else {
            res.render("comments/new", { campgrounds: campground })
        }
    });
});

// CREATE--COMMENT ROUTE
app.post("/campground/:id/comment", (req, res) => {
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


// PORT AND SERVER INFO
app.listen(3000, () => {
    console.log("Yelpcamp server is running on port 3000");
});