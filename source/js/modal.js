const pricesButtons = document.querySelectorAll(".prices__button");
const offersButton = document.querySelector(".offers__button");
const modalWindow = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
const modalInner = document.querySelector(".modal__inner");

const openModal = () => {
  modalWindow.classList.remove("hidden");
  closeModalButton.addEventListener("click", closeButtonClickHandler)
  document.addEventListener("keydown", modalEscPressHandler);
  //document.addEventListener("click", modalWindowClickHandler);
}

const closeModal = () => {
  modalWindow.classList.add("hidden");
  document.removeEventListener("keydown", modalEscPressHandler);
  closeModalButton.removeEventListener("click", closeButtonClickHandler)
 // document.removeEventListener("click", modalWindowClickHandler);
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

const modalWindowClickHandler = (evt) => {
  if (evt.target !== modalInner) {
    console.log(evt.target)
    closeModal();
  }
};
