// initializing squares with 6 numbers
var numSquares = 6;
// generating random colors
var color = generateRandomColor(numSquares);
//  Setting the target color
var pickedColor = pickColor();

// Selecting HTML elements for manipulation
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".colorDisplay");
var checkColor = document.querySelector(".checkColor");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// Intializing and displaying the target color on heading
colorDisplay.textContent = pickedColor;

// Easy button logic
easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  color = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    if (color[i]) {
      square[i].style.backgroundColor = color[i];
    } else {
      square[i].style.display = "none";
    }
  }
  // reset h1 background to default
  h1.style.backgroundColor = "steelblue";
});

// Hard button logic
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  color = generateRandomColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < color.length; i++) {
    square[i].style.display = "block";
    square[i].style.backgroundColor = color[i];
  }
  // h1 background back to normal
  h1.style.background = "steelblue";
});

// reset button
resetButton.addEventListener("click", function () {
  // generate all new colors
  color = generateRandomColor(numSquares);
  // picking new target color
  pickedColor = pickColor();
  // changing colorDisplay by new target
  colorDisplay.textContent = pickedColor;
  // change color of all sqaures
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color[i];
  }
  // reset h1 background to default
  h1.style.backgroundColor = "steelblue";
  // reset the resetButton text
  resetButton.textContent = "New Color";
  // removing colorDispay
  checkColor.textContent = "";
});

// Initializing squares
for (var i = 0; i < square.length; i++) {
  // add initial color to square
  square[i].style.backgroundColor = color[i];
  // add click listener to square
  square[i].addEventListener("click", function () {
    console.log(this.style.backgroundColor);
    //   store color that is bieng clicked
    var clickedColor = this.style.backgroundColor;
    // Compare color with target color to match
    if (clickedColor === pickedColor) {
      h1.style.backgroundColor = clickedColor;
      checkColor.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColor(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      checkColor.textContent = "Try Again!";
    }
  });
}

// function to set all the square and heading div to correct color
function changeColor(color) {
  // loop through all the colors
  for (var i = 0; i < square.length; i++) {
    // change each square to the target color
    square[i].style.backgroundColor = color;
  }
}

// changing randomly
function pickColor() {
  if (color.length === 6) {
    var random = Math.floor(Math.random() * 4 + 1);
    return color[random];
  } else {
    if (color.length === 3) {
      var random = Math.floor(Math.random() * 2 + 1);
      return color[random];
    }
  }
}

// getting random color
function generateRandomColor(num) {
  // making an array
  var arr = [];
  // repeat num number of times
  for (var i = 0; i < num; i++) {
    // get random color and push into the array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

// generating randon color
function randomColor() {
  // pick random number for "red" 0-255
  var r = Math.floor(Math.random() * 256);
  // pick random number for "green" 0-255
  var g = Math.floor(Math.random() * 256);
  // pick random number for "blue" 0-255
  var b = Math.floor(Math.random() * 256);

  // returns string in rgb format
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
