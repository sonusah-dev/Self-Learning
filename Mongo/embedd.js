// MONGOOSE DEPENDENCIES
const mongoose = require("mongoose");

//  CONNECTING WITH MONGODB
mongoose.connect("mongodb://localhost:27017/Association", { useNewUrlParser: true, useUnifiedTopology: true });

// SCHEMA CONFIG FOR DB
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// CREATING DB COLLECTION FOR INSTANCE
var Post = mongoose.model("Post", postSchema);

// SCHEMA CONFIG FOR DB
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

// CREATING DB COLLECTION FOR INSTANCE
var User = mongoose.model("User", userSchema);

// ADDING USER DATA 
var newUser = new User({
    email: "sonu@gradlic.com",
    name: "Sonu Sah"
});
newUser.save((error, user) => {
    if (error) {
        console.log(error);
    } else {
        console.log(user);
    }
});

// ADDING POST DATA 
var newPost = new Post({
    title: "Grambler",
    content: "Pro grambler in the world"
});
newPost.save((error, post) => {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

newUser.posts.push({
    title: "Hungry",
    content: "Nedd some food"
});
newUser.save((error, user) => {
    if (error) {
        console.log(error);
    } else {
        console.log(user);
    }
});

newUser.posts.push({
    title: "how to brew polyjuice",
    content: "jusk kidding don't take it seriusly"
});
newUser.save((error, user) => {
    if (error) {
        console.log(error);
    } else {
        console.log(user);
    }
});

User.findOne({ name: "Sonu Sah" }, (error, user) => {
    if (error) {
        console.log(error);
    } else {
        user.posts.push({
            title: "how to brew polyjuice how to brew polyjuice",
            content: "jusk kidding don't take it seriusly jusk kidding don't take it seriusly"
        })
        user.save((error, user) => {
            if (error) {
                console.log(error);
            } else {
                console.log(user);
            }
        });
    }
});