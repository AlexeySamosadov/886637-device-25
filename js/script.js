var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".close-write-us");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("display-block")
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("display-block");
});
