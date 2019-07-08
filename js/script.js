var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".close-write-us");
var login = popup.querySelector(".write-us-name input");
var form = popup.querySelector(".write-us form");
var email = popup.querySelector(".write-us-email input");
var textarea = popup.querySelector(".write-us-textarea textarea");
var miniMap = document.querySelector(".contacts-map");
var bigMap = document.querySelector(".big-map");
var closeMap = bigMap.querySelector(".modal-close");
var catalogMenuCatalog = document.querySelector('.catalog-menu-catalog');
var catalogMenu2 = document.querySelector('.catalog-menu-2');
var search = document.querySelector(".search input");
var searchButton = document.querySelector('.search-button');

search.addEventListener("focus", function (evt) {
  evt.preventDefault();
  searchButton.classList.toggle("display-block");
  console.log("ff")
});

catalogMenuCatalog.addEventListener(  "focus", function (evt) {
  evt.preventDefault();
  catalogMenu2.classList.toggle("display-flex");
});

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("display-block");
  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("display-block");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !textarea.value || !email.value) {
    evt.preventDefault();
    console.log("Заполните данный формы, пожалуйста!");
    console.log(login.value);
    console.log(email.value);
    console.log(textarea.value);
  }
});

miniMap.addEventListener("focus", function (evt) {
  evt.preventDefault();
  bigMap.classList.add("display-block");
  console.log("карта работает!");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.remove("display-block");
});
