// MONGOOSE DEPENDENCIES
const mongoose = require("mongoose");

//  CONNECTING WITH MONGODB
mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true, useUnifiedTopology: true });

// SCHEMA CONFIG FOR DB
var studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

// CREATING DB COLLECTION FOR INSTANCE
var students = mongoose.model("students", studentSchema);

// INSERTING DATA IN TABLE USING SAVE METHOD
var query = new students({
    name: "Rohit Gupta",
    age: 22,
    city: "Jorhat"
});
query.save((error, students) => {
    if (error) {
        console.log("Something went wrong");
    } else {
        console.log("Student is save to the database");
        console.log(students);
    }
});

// CREATE METHOD FOR INSERTING DATA
students.create({
    name: "Munmun Kumar",
    age: 23,
    city: "darbhanga"
}, (error, student) => {
    if (error) {
        console.log("Something went wrong");
    } else {
        console.log("Student is save to the database");
        console.log(student);
    }
});

// FIND METHOD FOR GETTING DATA FROM DB
students.find({}, (error, students) => {
    if (error) {
        console.log("Something went wrong");
    } else {
        console.log("All the Students record");
        console.log(students);
    }
});

