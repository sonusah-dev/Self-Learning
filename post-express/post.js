var express = require("express");
var app = express();
var bodyparser = require("body-parser");
// using folder public for assets file like css 
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
// setting view extention to be ejs
app.set("view engine", "ejs");
var friend = ["Sonu", "Rohit", "Sharanga"];

// routing the index page of application
app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addFriend", function (req, res) {
    console.log(req.body);
    var newFriend = req.body.newFriend;
    friend.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function (req, res) {
    res.render("friends", { friends: friend })
});

// configuration of port
app.listen(3000, function () {
    console.log("Server started");
    console.log("App is listening to port 3000");
})

