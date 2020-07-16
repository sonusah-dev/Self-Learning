const express = require("express");
const app = express();
const bodyparser = require("body-parser");

// Setting constant extention for views as ejs
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));

// Storing data in camp variable which is array of objects 
var camps = [
    { name: "Nilgiri", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy-r4cWxG7bPkDzVaOQ8Cz5ndNQxDrXFfcYA&usqp=CAU" },
    { name: "Shillong", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDbV_PTeKxNti5mnjM0tr9GzQxmx9xuHVrwQ&usqp=CAU" },
    { name: "Majuli", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT31Q7SNDkOPwDKpYnlfkcNcVdievi7aJWTVQ&usqp=CAU" },
    { name: "Arunachal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvDknm_Z4dweeeumxiojM2PEVMGdL6oFJ3-w&usqp=CAU" },
    { name: "Manali", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5dktox51jKGHtpEe7tYm2kAzOtnghyjfPew&usqp=CAU" },
    { name: "Lonavala", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvS-sJmxPE6KGv45ZNNMYCF63LuRa5h0rT3g&usqp=CAU" },
    { name: "Cherapunji", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6j8hlM95sMiFxAQclOOpuVWMwtXaTLzCrtw&usqp=CAU" },
    { name: "Gangtok", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjWaptzeyiCKHQO1Ee9lnuHu7mCrsnp86w0w&usqp=CAU" },
    { name: "Dawki", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI5L8TVVtJapaN_xs0T7iN5tK4JSwl5bmNiA&usqp=CAU" },
    { name: "Tawang", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbxKkJ3pWUfJgFBB_zX7hjx0DZNxBh-DgSHw&usqp=CAU" },
    { name: "Goa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvRuna_pw5M__ru7oMVkuB1l-lcBrWRGM8JA&usqp=CAU" },
    { name: "Kerela", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsfchf2Sus-OEw0pIf49OdiaA8kSgrWz4SKg&usqp=CAU" }
];

// Landing page route configs
app.get("/", (req, res) => {
    res.render("home");
});

//campground get route
app.get("/campgrounds", (req, res) => {
    // sending camp data to home.ejs page to render it and display
    res.render("camps", { camps: camps });
});

// campground post route
app.post("/campgrounds", (req, res) => {
    // recieving data from post request and assigning it to variables
    var name = req.body.name;
    var image = req.body.image;
    var newcamp = { name: name, image: image }
    // pushing object to existing camp array
    camps.push(newcamp);
    // redirect to campgrounds page
    res.redirect("/campgrounds");
});

// New campground route
app.get("/campgrounds/new", (req, res) => {
    // sending to newcamp.ejs 
    res.render("newcamp");
});

// Port information where our server is running
app.listen(3000, () => {
    console.log("Yelpcamp server is started!");
    console.log('Listening to port 3000');
});