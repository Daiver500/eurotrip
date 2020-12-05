const catalogImageButton = document.querySelector(".catalog__image-button");
const catalogTitle = document.querySelector(".catalog__title");
const catalogButton = document.querySelectorAll(".catalog__button")
const catalogOffers = document.querySelector(".catalog__offers")
const offersList = document.querySelector(".offers__list")

catalogImageButton.addEventListener("click", function(){
  catalogTitle.scrollIntoView({behavior: "smooth"});
})

catalogButton.forEach((item) => {
  item.addEventListener("click", function(){
    catalogOffers.scrollIntoView({behavior: "smooth"});
  })
})

const setActiveFilterBtn = (evt) => {
  const currentActive = document.querySelector(".offers__button--active");
  const {target} = evt;
  if (!target.classList.contains(`offers__button--active`)) {
    currentActive.classList.remove(`offers__button--active`);
    target.classList.add(`offers__button--active`);
  }
};

const greece = document.querySelector(".offers__wrapper-greece")
const albania = document.querySelector(".offers__wrapper-albania")
const makedonia = document.querySelector(".offers__wrapper-makedonia")
const montenegro = document.querySelector(".offers__wrapper-montenegro")
const croatia = document.querySelector(".offers__wrapper-croatia")

const test = () => {
  if(!greece.classList.contains("offers__wrapper--active")) {
    albania.classList.remove("offers__wrapper--active");
    makedonia.classList.remove("offers__wrapper--active");
    montenegro.classList.remove("offers__wrapper--active");
    croatia.classList.remove("offers__wrapper--active");
    greece.classList.add("offers__wrapper--active");
  }
}

const test2 = () => {
  if(!albania.classList.contains("offers__wrapper--active")) {
    greece.classList.remove("offers__wrapper--active");
    makedonia.classList.remove("offers__wrapper--active");
    montenegro.classList.remove("offers__wrapper--active");
    croatia.classList.remove("offers__wrapper--active");
    albania.classList.add("offers__wrapper--active");
  }
}

const test3 = () => {
  if(!makedonia.classList.contains("offers__wrapper--active")) {
    greece.classList.remove("offers__wrapper--active");
    albania.classList.remove("offers__wrapper--active");
    montenegro.classList.remove("offers__wrapper--active");
    croatia.classList.remove("offers__wrapper--active");
    makedonia.classList.add("offers__wrapper--active");
  }
}

const test4 = () => {
  if(!montenegro.classList.contains("offers__wrapper--active")) {
    greece.classList.remove("offers__wrapper--active");
    albania.classList.remove("offers__wrapper--active");
    makedonia.classList.remove("offers__wrapper--active");
    croatia.classList.remove("offers__wrapper--active");
    montenegro.classList.add("offers__wrapper--active");
  }
}

const test5 = () => {
  if(!croatia.classList.contains("offers__wrapper--active")) {
    greece.classList.remove("offers__wrapper--active");
    albania.classList.remove("offers__wrapper--active");
    makedonia.classList.remove("offers__wrapper--active");
    montenegro.classList.remove("offers__wrapper--active");
    croatia.classList.add("offers__wrapper--active");
  }
}

const filterClickHandler = ((evt) => {
  setActiveFilterBtn(evt);

  switch (evt.target.id) {
    case `greece`:
      test();
      break;
    case `albania`:
     test2();
      break;
    case `makedonia`:
     test3();
      break;
    case `montenegro`:
     test4();
      break;
    case `croatia`:
     test5();
      break;
    default:
  }
});
offersList.addEventListener(`click`, filterClickHandler);

