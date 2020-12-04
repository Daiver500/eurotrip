const pricesButtons = document.querySelectorAll(".prices__button");
const offersButton = document.querySelector(".offers__button");
const modalMain = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
const modalInner = document.querySelector(".modal__inner");

const openModal = () => {
  modalMain.classList.remove("modal__hidden");
  closeModalButton.addEventListener("click", closeButtonClickHandler)
  document.addEventListener("keydown", modalEscPressHandler);
  //document.addEventListener("click", windowClickHandler);
}

const closeModal = () => {
  modalMain.classList.add("modal__hidden");
  closeModalButton.removeEventListener("click", closeButtonClickHandler)
  document.removeEventListener("keydown", modalEscPressHandler);
  //document.removeEventListener("click", windowClickHandler);
}

pricesButtons.forEach((item) => {
  item.addEventListener("click", openModal)
});

offersButton.addEventListener("click", openModal);

const closeButtonClickHandler = () => {
  closeModal();
}

const modalEscPressHandler = (evt) => {
  if (evt.key === `Escape`) {
    closeModal();
    evt.preventDefault();
  }
};

const windowClickHandler = (evt) => {
  if (evt.target !== modalInner) {
    closeModal()
  }
};
