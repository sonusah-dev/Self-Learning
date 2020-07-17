// DEPENDENCIES FOR OUR APP
const bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

// BASIC APP CONFIGURATION
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// CONNECTING WITH MONGO SERVER
mongoose.connect("mongodb://localhost:27017/blogDb", { useNewUrlParser: true, useUnifiedTopology: true });

//  SCHEMA SETUP FOR BLOG DB
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

// CREATING BLOG-DB COLLECTION AND INSTANCE FOR MANIPUATION
const Blog = mongoose.model("blogs", blogSchema);

// INSERTING TEMPORARY BLOG DATA FOR TESTING
// Blog.create(
//     {

//         title: "Jorhat Supermarket",
//         image: "https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/ql1jkgxwu3hcpotz_1587036063.jpeg?tr=w-812,h-464",
//         comment: "This is biggest supermarket in Assam where all kinds of essentials are provided",

//     }, (err, blogs) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Newly Created blogs");
//             console.log(blogs);
//         }
//     }
// );

// INDEX----BLOG ROUTE
app.get("/", (req, res) => {
    res.redirect("blogs");
});

// GET---BLOG ROUTE
app.get("/blogs", (req, res) => {
    Blog.find({}, (error, blogResults) => {
        if (error) {
            console.log(error);
        } else {
            res.render("blogs", { blogs: blogResults });
        }
    })
});

// CREATE---BLOG POST ROUTE
app.get("/blogs/new", (req, res) => {
    res.render("new");
});

// POST---BLOG ROUTE
app.post("/blogs", (req, res) => {
    Blog.create(req.body.blogs, (error, newblog) => {
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


// PORT AND SERVER INFO
app.listen(3000, () => {
    console.log("Yelpcamp server has started!");
    console.log('Listening to port 3000');
});
