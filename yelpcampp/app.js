// DEPENDENCIES FOR OUR APP
const express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose');

// BASIC APP CONFIGURATION
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

// CONNECTING WITH MONGODB SERVER
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });

// ADDING SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// CREATING COLLECTION OF CAMPGROUND
var campgrounds = mongoose.model("campground", campgroundSchema);

// INSERTING CAMPGROUND DATA TEMPORARY FOR TESTING
// campgrounds.create(
//     {
//         name: "Dawki",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI5L8TVVtJapaN_xs0T7iN5tK4JSwl5bmNiA&usqp=CAU"

//     }, (err, campgrounds) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Newly Created Campground");
//             console.log(campgrounds);
//         }
//     }
// );

// LANDING--ROUTES
app.get("/", (req, res) => {
    res.render("home");
});

// GET--CAMPGROUND ROUTE
app.get("/campground", (req, res) => {
    // RENDERING DATA FROM DB AND SENDING TO HOME.EJS
    campgrounds.find({}, (error, allCampgrounds) => {
        if (error) {
            console.log(error);
        } else {
            res.render("campground", { campgrounds: allCampgrounds });
        }
    })
});

// POST--CAMPGROUND ROUTES
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
    })
});

// NEW--CAMPGROUND ROUTES
app.get("/campground/new", (req, res) => {
    // DIRECTING TO NEWCAMP.EJS 
    res.render("newCampground");
});

// SHOW--CAMPGROUND ROUTES
app.get("/campground/:id", (req, res) => {
    // FIND THE CAMPGROUND WITH THE PROVIDED ID
    campgrounds.findById(req.params.id, (error, foundCampground) => {
        if (error) {
            console.log(error);
        } else {
            // RENDER SHOW TEMPLATE WITH THAT CAMPGROUND
            res.render("showCampground", { campgrounds: foundCampground });
        }
    })
});

// PORT AND SERVER INFO
app.listen(3000, () => {
    console.log("Yelpcamp server has started!");
    console.log('Listening to port 3000');
});