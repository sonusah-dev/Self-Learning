// var cat = require("cat-me");
// var jokes = require("knock-knock-jokes");
// var faker = require("faker");
// console.log(cat());
// console.log(jokes());

// console.log("=============================================");
// console.log("Fake Random Information for dummy data need");
// console.log("=============================================");
// for (var i = 0; i < 10; i++) {
//   console.log(faker.name.firstName() + " " + faker.name.lastName());
//   console.log(faker.name.jobTitle());
//   console.log(faker.address.city());
//   console.log(faker.address.country());
//   console.log(faker.company.companyName());
//   console.log(faker.company.companySuffix());
//   console.log(faker.phone.phoneNumber());
//   console.log("*********************************************");
// }

// including express to our app
var express = require("express");
var app = express();

// get request for root file
app.get("/", function (req, res) {
  res.send("Welcome to Express");
});

// routing to hi
app.get("/hi", function (req, res) {
  res.send("Hi from Express");
});

// routing to bye
app.get("/bye", function (req, res) {
  res.send("Goodbye from Express");
});

// route parameters with dynamic user request
// denoting with : symbol before the route params
app.get("/route/:subRoute/validate/:username/:id", function (req, res) {
  console.log(req.params);
  var subroute = req.params.subRoute,
    username = req.params.username,
    id = req.params.id;

  res.send("Login Validation" + " " + subroute + " " + username + " " + id);
});

//solution for routing to undefined page
// It should be the last route ie(if none of the route match * route is called)
app.get("*", function (req, res) {
  res.send("You are trying to access undefined page");
});

// defining port
app.listen(3000, function () {
  console.log("Server is started");
  console.log("Server listening to port:3000");
});
