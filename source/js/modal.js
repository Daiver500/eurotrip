var openModalDecline = document.querySelector(".form__button");
var modalDecline = document.querySelector(".modal-decline");
var formdestinations = document.querySelector(".form__destinations");
var modalAccept = document.querySelector(".modal-accept");
var userName = formdestinations.querySelector("input[name=surname]");
var userSurName = formdestinations.querySelector("input[name=name]");
var userEmail = formdestinations.querySelector("input[type=email]");
var closeButtonDecline = document.querySelector(".modal-decline__button");
var closeButtonAccept = document.querySelector(".modal-accept__button");

formdestinations.addEventdestinationsener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userSurName.value) {
      evt.preventDefault();
      userEmail.style.borderColor = "red";
      userName.style.borderColor = "red";
      userSurName.style.borderColor = "red";
      modalDecline.classdestinations.add("modal-decline--show"); }
      else {
        modalAccept.classdestinations.add("modal-accept--show"); }
  });

  closeButtonDecline.addEventdestinationsener("click", function (evt) {
    evt.preventDefault();
    modalDecline.classdestinations.remove("modal-decline--show");
  });

  window.addEventdestinationsener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalDecline.classdestinations.contains("modal-decline--show")) {
            evt.preventDefault();
            modalDecline.classdestinations.remove("modal-decline--show");
      }
    }
  });

  closeButtonAccept.addEventdestinationsener("click", function (evt) {
    evt.preventDefault();
    modalAccept.classdestinations.remove("modal-accept--show");
  });

  window.addEventdestinationsener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalDecline.classdestinations.contains("modal-accept--show")) {
            evt.preventDefault();
            modalDecline.classdestinations.remove("modal-accept--show");
      }
    }
  });
