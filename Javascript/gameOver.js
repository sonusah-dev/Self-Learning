var d1 = document.querySelector("#d1");
var d2 = document.querySelector("#d2");
var limit = document.querySelector("#limit");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var b1Click = false;
var score1 = 0;
var score2 = 0;
var highScore = 5;

// player 1 click controller
b1.addEventListener("click", function () {
  if (!b1Click) {
    score1++;
    if (score1 === highScore) {
      d1.classList.add("green");
      b1Click = true;
    }
    d1.textContent = score1;
  }
});

// player 2 click controller

b2.addEventListener("click", function () {
  if (!b1Click) {
    score2++;
    if (score2 === highScore) {
      d2.classList.add("green");
      b1Click = true;
    }
    d2.textContent = score2;
  }
});

// reset button events

reset.addEventListener("click", function () {
  resett();
});

// Reset function
function resett() {
  d1.textContent = 0;
  d2.textContent = 0;
  d1.classList.remove("green");
  d2.classList.remove("green");
  score1 = 0;
  score2 = 0;
  b1Click = false;
}

// Input change event

input.addEventListener("change", function () {
  limit.textContent = Number(input.value);
  highScore = Number(input.value);
  resett();
});
