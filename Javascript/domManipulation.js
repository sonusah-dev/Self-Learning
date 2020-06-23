// // Changing h1 color
// var domObject = document.querySelector("h1");
// domObject.style.color = "purple";

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
