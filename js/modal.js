var openModalDecline = document.querySelector(".form__button");
var modalDecline = document.querySelector(".modal-decline");
var formList = document.querySelector(".form__list");
var modalAccept = document.querySelector(".modal-accept");
var userName = formList.querySelector("input[name=surname]");
var userSurName = formList.querySelector("input[name=name]");
var userEmail = formList.querySelector("input[type=email]");
var closeButtonDecline = document.querySelector(".modal-decline__button");
var closeButtonAccept = document.querySelector(".modal-accept__button");

formList.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userSurName.value) {
      evt.preventDefault();
      userEmail.style.borderColor = "red";
      userName.style.borderColor = "red";
      userSurName.style.borderColor = "red";
      modalDecline.classList.add("modal-decline--show"); }
      else {
        modalAccept.classList.add("modal-accept--show"); }
  });

  closeButtonDecline.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalDecline.classList.remove("modal-decline--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalDecline.classList.contains("modal-decline--show")) {
            evt.preventDefault();
            modalDecline.classList.remove("modal-decline--show");
      }
    }
  });

  closeButtonAccept.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAccept.classList.remove("modal-accept--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalDecline.classList.contains("modal-accept--show")) {
            evt.preventDefault();
            modalDecline.classList.remove("modal-accept--show");
      }
    }
  });
