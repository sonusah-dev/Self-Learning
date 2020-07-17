var express = require("express");
var app = express();

// BASIC CONFIGS  
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/:short/:full", function (req, res) {
  var abbre = req.params.short;
  var fullform = req.params.full;
  res.render("dynamo", { abbre: abbre, fullform: fullform });
});

app.listen("3000", function () {
  console.log("Server is started");
  console.log("listening to port:3000");
});
