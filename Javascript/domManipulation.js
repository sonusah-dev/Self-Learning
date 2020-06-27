// Changing h1 color
var domObject = document.querySelector("h1");
domObject.style.color = "purple";

// Changing backgound color dip-dip

var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var isBlue;

setInterval(function () {
  if (isBlue) {
    body.style.background = "#9731d6";
    h1.style.color = "white";
  } else {
    body.style.background = "#d631cb";
    h1.style.color = "black";
  }
  isBlue = !isBlue;
}, 300);

// Add Remove function in classList

var resize = document.querySelector(".size");
var isSized;

setInterval(function () {
  if (!isSized) {
    resize.classList.add("sizing");
  } else {
    resize.classList.remove("sizing");
  }
  isSized = !isSized;
}, 500);

// Toogle function most usefull save lines of code

var toggler = document.querySelector(".size");
setInterval(function () {
  toggler.classList.toggle("sizing");
}, 600);

// event on button
var button = document.querySelector("button");
button.addEventListener("click", function () {
  var p = document.querySelector("p");
  p.textContent = "I am being clicked";
});

//  event on heading

var head = document.querySelector("h1");
head.addEventListener("click", function () {
  alert("H1 was clicked");
  head.style.fontSize = "50px";
  head.style.color = "#b1fc03";
  head.style.textAlign = "center";
});

// events for multiple elements

var list = document.querySelectorAll("li");
for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    this.style.color = "red";
  });
}

// color changer using event on button

var change = document.querySelector(".toggle");
var button = document.querySelector("button");
var bool;

button.addEventListener("click", function () {
  if (bool) {
    change.style.backgroundColor = "#00e1ff";
  } else {
    change.style.backgroundColor = "#7bff00";
  }
  bool = !bool;
});
