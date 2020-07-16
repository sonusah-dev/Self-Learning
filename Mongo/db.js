const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/demo");

var studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

var students = mongoose.model("students", studentSchema);

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

students.find({}, (error, students) => {
    if (error) {
        console.log("Something went wrong");
    } else {
        console.log("All the Students record");
        console.log(students);
    }
});