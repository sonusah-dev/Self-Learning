// print numbers between -10 to 20
var number = -10;
while (number < 20) {
  console.log(number);
  number++;
}

//print all even numbers between 10 and 40
var number1 = 12;
while (number1 < 40) {
  console.log(number1);
  number1 += 2;
}

// print odd between 300 and 333
var number2 = 301;
while (number2 < 333) {
  console.log(number2);
  number2 += 2;
}

//divisible by 5 and 3 between 5 and 50
var num = 5;
while (num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}

// repeat until yes
var string = prompt("Are we done");
while (string !== "yes" && string !== "yeah") {
  var string = prompt("Are we done");
}
alert("Now we are done!");

// repeat until yes using indexOf function
var string = prompt("Are we done");
while (string.indexOf("yes") === -1 && string.indexOf("yeah") === -1) {
  var string = prompt("Are we done");
}
alert("Now we are done!");

// check even using function
function isEven(num) {
  if (num % 2 === 0) return "True";
  else return "False";
}
isEven(12);

//find factorial by function
var factorial = function (fact) {
  if (fact === 0) return 1;
  var i = fact - 1;
  while (i > 0) {
    fact *= i;
    i--;
  }
  return fact;
};
factorial(5);

// Convert kebab-case to snake_case using function
var convertCase = function (string) {
  var replaceString = string.replace(/-/g, "_");
  return replaceString;
};
convertCase("HELLO-FRIENDS-CHAI-PEELO");
