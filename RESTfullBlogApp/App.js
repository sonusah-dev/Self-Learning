// DEPENDENCIES FOR OUR APP
const bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressSantizer = require('express-sanitizer'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

// BASIC APP CONFIGURATION
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressSantizer());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

// CONNECTING WITH MONGO SERVER
mongoose.connect("mongodb://localhost:27017/blogDb", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//  SCHEMA CONFIG FOR BLOG DB
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

// CREATING BLOG-DB COLLECTION AND INSTANCE FOR MANIPUATION
const Blog = mongoose.model("blogs", blogSchema);

/////////////////////////// RESTful CONVENTION OF ROUTING APPLICATION ///////////////////////////

// LANDING----BLOG ROUTE
app.get("/", (req, res) => {
    res.redirect("blogs");
});

// INDEX---BLOG ROUTE
app.get("/blogs", (req, res) => {
    Blog.find({}, (error, blogResults) => {
        if (error) {
            console.log(error);
        } else {
            res.render("blogs", { blogs: blogResults });
        }
    })
});

// NEW---BLOG ROUTE
app.get("/blogs/new", (req, res) => {
    res.render("new");
});

// CREATE---BLOG ROUTE
app.post("/blogs", (req, res) => {
    // SANITIZING BEFORE INSERTING DATA
    // req.body.blogs.body = req.sanitize(req.body.blogs.body);
    Blog.create(req.body.blogs, (error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect("/blogs");
        }
    })
});

// SHOW---BLOG ROUTE
app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (error, foundblog) => {
        if (error) {
            console.log(error);
        } else {
            res.render("show", { blog: foundblog });
        }
    })
});

// EDIT---BLOG ROUTE
app.get("/blogs/:id/edit", (req, res) => {
    Blog.findById(req.params.id, (error, foundblog) => {
        if (error) {
            console.log(error);
        } else {
            res.render("edit", { blog: foundblog });
        }
    })
});

// UPDATE---BLOG ROUTE
app.put("/blogs/:id", (req, res) => {
    // SANITIZING BEFORE UPDATING DATA
    // req.body.blogs.body = req.sanitize(req.body.blogs.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blogs, (error) => {
        if (error) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    })
});

// DELETE---BLOG ROUTE
app.delete("/blogs/:id", (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    })
});

/////////////////////////// PORT AND SERVER CONFIG ///////////////////////////

app.listen(3000, () => {
    console.log("Blog App server is running on port:3000");
});
