const pricesButtons = document.querySelectorAll(".prices__button");
const offersButton = document.querySelectorAll(".offers__button-order");
const modalMain = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
const modalInner = document.querySelector(".modal__inner");
const modalForm = document.querySelector(".modal__form")
const modalSuccess = document.querySelector(".modalsuccess");
const closeModalSuccessButton = document.querySelector(".modalsuccess__close");
const modalSuccessInner = document.querySelector(".modalsuccess__inner");
const modalPhone = document.querySelector(".modal__phone");
const modalEmail = document.querySelector(".modal__email");
const contactsForm = document.querySelector(".contacts__form");
const contactsPhone = document.querySelector(".contacts__phone");
const contactsEmail = document.querySelector(".contacts__email");

const modalEscPressHandler = (evt) => {
  if (evt.key === `Escape`) {
    closeModal();
    evt.preventDefault();
  }
};

const openModal = () => {
  modalMain.classList.remove("modal__hidden");
  closeModalButton.addEventListener("click", closeModalButtonClickHandler)
  document.addEventListener("keydown", modalEscPressHandler);
  modalForm.addEventListener("submit", formSendingHandler);
}

const closeModal = () => {
  modalMain.classList.add("modal__hidden");
  closeModalButton.removeEventListener("click", closeModalButtonClickHandler)
  document.removeEventListener("keydown", modalEscPressHandler);
  modalForm.removeEventListener("submit", formSendingHandler);
}

pricesButtons.forEach((item) => {
  item.addEventListener("click", openModal)
});

offersButton.forEach((item) => {
  item.addEventListener("click", openModal)
});

const closeModalButtonClickHandler = () => {
  closeModal();
}

const modalSuccessEscPressHandler = (evt) => {
  if (evt.key === `Escape`) {
    closeSuccessModal();
    evt.preventDefault();
  }
};

const openSuccessModal = () => {
  modalMain.classList.add("modal__hidden");
  modalSuccess.classList.remove("modal__hidden");
  closeModalSuccessButton.addEventListener("click", closeModalSuccessButtonClickHandler)
  document.addEventListener("keydown", modalSuccessEscPressHandler);
}

const closeSuccessModal = () => {
  modalSuccess.classList.add("modal__hidden");
  closeModalSuccessButton.addEventListener("click", closeModalSuccessButtonClickHandler)
  document.removeEventListener("keydown", modalSuccessEscPressHandler);
}

const closeModalSuccessButtonClickHandler = () => {
  closeSuccessModal();
}

const formSendingHandler = (evt) => {
  modalPhone.value = "";
  modalEmail.value = "";
  openSuccessModal();
  evt.preventDefault();
}

contactsForm.addEventListener("submit", function (evt) {
  modalSuccess.classList.remove("modal__hidden");
  evt.preventDefault();
  closeModalSuccessButton.addEventListener("click", closeModalSuccessButtonClickHandler)
  document.addEventListener("keydown", modalSuccessEscPressHandler);
  contactsPhone.value = "";
  contactsEmail.value = "";
})

