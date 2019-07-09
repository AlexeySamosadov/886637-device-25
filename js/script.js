var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".close-write-us");
var miniMap = document.querySelector(".contacts-map");
var bigMap = document.querySelector(".big-map");
var catalogMenuCatalog = document.querySelector(".catalog-menu-catalog");
var catalogMenu2 = document.querySelector(".catalog-menu-2");
var search = document.querySelector(".search input");
var searchButton = document.querySelector(".search-button");

/*
var item = document.querySelector(".item");
var itemCards = document.querySelector(".item-carts");

  item.addEventListener("focus", function (evt) {
    console.log("Работает скрипт");
    itemCards.classList.add("display-block");

  });
 */
if (popup) {
  var login = popup.querySelector(".write-us-name input");
  var form = popup.querySelector(".write-us form");
  var email = popup.querySelector(".write-us-email input");
  var textarea = popup.querySelector(".write-us-textarea textarea");

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
};

if (bigMap) {
  var closeMap = bigMap.querySelector(".modal-close");

  miniMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.add("display-block");
    console.log("карта работает!");
  });

  closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.remove("display-block");
  });
};

search.addEventListener("focus", function(evt) {
  evt.preventDefault();
  searchButton.classList.toggle("display-block");
  console.log("ff")
});

catalogMenuCatalog.addEventListener("focus", function(evt) {
  evt.preventDefault();
  catalogMenu2.classList.toggle("display-flex");
});
