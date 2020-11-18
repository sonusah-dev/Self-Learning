const express = require("express"),
  app = express(),
  bodyparser = require("body-parser"),
  bcrypt = require("bcrypt");

const users = [];

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// ======================================================================================
// ======================================================================================

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
  // res.json(users);
});

app.post("/register", async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, email: req.body.email, password: hashedPassword };
    users.push(user);
    res.status(201).send(user);
    // res.render("/login");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const user = users.find(user => user.email === req.body.email);
  if (user == null) {
    return res.status(400).send("User Not found");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Welcome " + user.name);
    } else {
      res.send("Not Allowed");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log("loginAuth is running on port 3000!");
});
