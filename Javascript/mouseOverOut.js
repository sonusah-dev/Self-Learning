var li = document.querySelectorAll("li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseover", function () {
    this.classList.add("hoverOver");
  });
  li[i].addEventListener("mouseout", function () {
    this.classList.remove("hoverOver");
  });
  li[i].addEventListener("click", function () {
    this.classList.add("selected");
  });
}
