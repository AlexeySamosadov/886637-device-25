var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".close-write-us");
var miniMap = document.querySelector(".contacts-map");
var bigMap = document.querySelector(".big-map");
var catalogMenuCatalog = document.querySelector('.catalog-menu-catalog');
var catalogMenu2 = document.querySelector('.catalog-menu-2');
var search = document.querySelector(".search input");
var searchButton = document.querySelector('.search-button');

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
