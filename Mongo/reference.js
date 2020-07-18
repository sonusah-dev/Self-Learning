// REQUIRING DEPENDENCIES
const mongoose = require("mongoose");
connection = require('./public/connection');
Post = require('./models/posts');
User = require('./models/users');

// CREATING POST AND REFERENCE THEM AND PUSH INTO POSTS
Post.create({
    title: "Halwa",
    content: "We cook for the best"
}, (error, post) => {
    if (error) {
        console.log("error");
    } else {
        User.findOne({ email: "bob@gmail.com" }, (error, foundUser) => {
            if (error) {
                console.log("error");
            } else {
                foundUser.posts.push(post);
                foundUser.save((error, data) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(data);
                    }
                })
            }
        })
    }
});


// FIND USER AND ALSO SHOW REFERENCE DATA
User.findOne({ name: "BOB MARLEY" }).populate("posts").exec((error, user) => {
    if (error) {
        console.log(error);
    } else {
        console.log(user);
    }
});