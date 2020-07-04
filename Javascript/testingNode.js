function echo(string, num) {
  for (var i = 0; i < num; i++) {
    console.log(string);
  }
}

echo("Hello Node", 1);

// function for calculating average marks
function grader(scores) {
  var result = 0;
  scores.forEach(function (score) {
    result += score;
  });
  var average = result / scores.length;
  return Math.round(average);
}
console.log("Average marks of Computer students");
var computer = [90, 78, 98, 78.87];
console.log(grader(computer));
console.log("Average marks of Mathamatics students");
var maths = [67, 45, 56, 60, 75];
console.log(grader(maths));
