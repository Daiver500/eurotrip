const pricesButtons = document.querySelectorAll(".prices__button");
const offersButton = document.querySelectorAll(".offers__button-order");
const modalMain = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
const modalInner = document.querySelector(".modal__inner");

const modalEscPressHandler = (evt) => {
  if (evt.key === `Escape`) {
    closeModal();
    evt.preventDefault();
  }
};

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

offersButton.forEach((item) => {
  item.addEventListener("click", openModal)
});

const closeButtonClickHandler = () => {
  closeModal();
}

//const windowClickHandler = (evt) => {
  //if (!modalMain.classList.contains("modal__hidden") || evt.target !== modalInner) {
    //closeModal()
  //}
//};
