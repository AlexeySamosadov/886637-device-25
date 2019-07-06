var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".close-write-us");
var login = popup.querySelector(".write-us-name input");
var form = popup.querySelector(".write-us form");
var email = popup.querySelector(".write-us-email input");
var textarea = popup.querySelector(".write-us-textarea textarea");
var miniMap = document.querySelector(".contacts-map img");
var bigMap = document.querySelector(".big-map");
var closeMap = bigMap.querySelector(".modal-close");

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

miniMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.add("display-block");
  console.log("карта работает!");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.remove("display-block");
});
