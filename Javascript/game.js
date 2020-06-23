var secretNumber = 5; //storing secret number in  var
var stringGuess = prompt("Guesss a number"); //prompt always takes string input
var guess = Number(stringGuess); //converts string to number
if (guess === secretNumber) {
  alert("You got it correct!");
} else if (guess > secretNumber) {
  alert("Its too high!");
} else {
  alert("Its too low!");
}
