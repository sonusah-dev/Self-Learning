// Exercise on array if-else loops
var todo = ["Python"];
var action = prompt("Select your choice");
while (action !== "quit") {
  if (action === "list") {
    console.log(todo);
  } else if (action === "new") {
    var newTodo = prompt("Enter new todos");
    todo.push(newTodo);
  }
  var action = prompt("Select your choice");
}
console.log("OK you quit the log");

// Advance todo list using forEach
var todo = ["Initialization"];
var action = prompt("Select your choice");
while (action !== "quit") {
  if (action === "list") {
    listTodo();
  } else if (action === "new") {
    addTodo();
  } else if (action === "delete") {
    deleteTodo();
  }
  var action = prompt("Select your choice");
}
console.log("OK you quit the log");

// fuction for different operations
function listTodo() {
  console.log("****************");
  todo.forEach(function (items, index) {
    console.log(index + ": " + items);
  });
  console.log("****************");
}

function addTodo() {
  var newTodo = prompt("Enter new todos");
  todo.push(newTodo);
  console.log(newTodo + " added to the list");
}

function deleteTodo() {
  var index = prompt("Enter the item index to delete");
  todo.splice(index, 1);
  console.log("Item deleted from the index:" + index);
}

// reverse the array objects
function reverse() {
  var book = ["new", "old", "ancient", "vedic"];
  for (i = book.length - 1; i >= 0; i--) {
    console.log(book[i]);
  }
}
reverse();

// state true for same array objects or return false

function isSimilar() {
  var numbers = [23, 23, 23, 23];
  var bool;
  for (i = 1; i < numbers.length; i++) {
    if (book[0] !== numbers[i]) {
      bool = "false";
    } else bool = "true";
  }
  return bool;
}
isSimilar();

//  Sum of the number array data

function sumOfNumberArray() {
  var numbers = [20, 20, 20, 20];
  var sum = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
sumOfNumberArray();

// Object signatures-1
var subjects = {
  sub1: Maths,
  sub2: Physics,
  sub3: Chemistry,
  sub4: Biology,
  sub5: English,
  sub6: Alt - English,
};

// object signature-2
var subjects = {};
subjects.sub1 = Maths;
subjects.sub2 = Physics;
subjects.sub3 = Chemistry;
subjects.sub4 = Biology;
subjects.sub5 = English;
subjects.sub6 = Alt - English;

// object signature-3
var subjects = new Object();
subjects.sub1 = Maths;
subjects.sub2 = Physics;
subjects.sub3 = Chemistry;
subjects.sub4 = Biology;
subjects.sub5 = English;
subjects.sub6 = Alt - English;

// nested objects and arrays

var post = [
  {
    title: "Inspirational",
    author: "Sonu",
    comments: ["Aspire to inspire before we expire", "young-thug"],
    likes: 100,
  },
  {
    title: "Fitness",
    author: "XYZ",
    comments: ["No pain no gain", "Be-legend"],
    likes: 100,
  },
];
post[0].comments[0];
post[1].comments[1];
post[0].likes;

// Nested obj array

var newObject = {
  friends: [
    { fName: "Dhiru", lName: "kumar" },
    { name: "Rohit" },
    { name: "Vikas" },
    { name: "Sharanga" },
    { name: "Rjesh" },
  ],
  favColor: [
    "Black",
    "Navy",
    { type1Blue: "Sky Blue", type2Blue: "Powder Blue" },
  ],
  status: "allActive",
};

// Exercise moviesDb msg

var movies = [
  {
    title: "Mission Inposible",
    hasWatched: "false",
    rating: 4.8,
  },
  {
    title: "Casino Royale",
    hasWatched: "true",
    rating: 5,
  },
  {
    title: "San Andreas",
    hasWatched: "false",
    rating: 4.6,
  },
];

function buildString(movie) {
  var stringResult = "You have";
  if (movie.hasWatched === "true") {
    stringResult += " watched";
  } else {
    stringResult += " not watched";
  }
  stringResult += ' "' + movie.title + '" : ' + movie.rating + " star";
  console.log(stringResult);
}

movies.forEach(function (movie) {
  console.log(buildString(movie));
});

// Javascript Methods
// Js methods : functions inside an object is called methods.
// In this example fees is the method which is of function type

var events = {
  title: "Festival",
  date: "01/05/2020",
  investment: 20000,
  status: false,
  fees: function (registration, tShirt) {
    var totalAmount = registration + tShirt;
    return totalAmount;
  },
};

events.fees(1000, 200);

// Namespace concept

var dogTalk = {};
var catTalk = {};
dogTalk.speak = function () {
  return "bark";
};
catTalk.speak = function () {
  return "meow";
};

dogTalk.speak();
catTalk.speak();

//  this keyword in Js

var events = {
  name: "Durga Puja",
  title: "Festival",
  addString: function () {
    console.log(this.name + " is the " + this.title + " of love");
  },
};
events.addString();
