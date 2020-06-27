var id = document.getElementById("high");
var claas = document.getElementsByClassName("low");
var tag = document.getElementsByTagName("li");
// Used to select id class or tag name for css design changing, it RETURNS only first match ONE element
var select = document.querySelector(".low");
// Used to select id class or tag name for css design changing, it RETURNS only ALL element that match
var all = document.querySelectorAll(".low");
console.log(id + claas + tag + select + all);
