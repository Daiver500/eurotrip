const catalogImageButton = document.querySelector(".catalog__image-button");
const catalogHeader = document.querySelector(".catalog__header");
const catalogButton = document.querySelectorAll(".catalog__button")
const catalogOffers = document.querySelector(".catalog__offers")
const offersList = document.querySelector(".offers__list")
const greece = document.querySelector(".offers__wrapper-greece")
const albania = document.querySelector(".offers__wrapper-albania")
const makedonia = document.querySelector(".offers__wrapper-makedonia")
const montenegro = document.querySelector(".offers__wrapper-montenegro")
const croatia = document.querySelector(".offers__wrapper-croatia")
const catalogList = document.querySelector(".catalog__list")
const catalogImageButtonMobile = document.querySelector(".catalog__image-buttonmobile")

catalogImageButton.addEventListener("click", function(){
  catalogHeader.scrollIntoView({behavior: "smooth"});
})

catalogImageButtonMobile.addEventListener("click", function(){
  catalogHeader.scrollIntoView({behavior: "smooth"});
})

const scrollDown = () => {
  catalogButton.forEach((item) => {
    item.addEventListener("click", function(){
      catalogOffers.scrollIntoView({behavior: "smooth"});
    })
  })
}
scrollDown()

const catalogButtons = document.querySelectorAll(".catalog__button");
const offerButtons = document.querySelectorAll(".offers__button");
const offerWrappers = document.querySelectorAll(".offers__wrapper");
const offerButtonsParent = document.querySelector(".offers__list");
const catalogButtonsParent = document.querySelector(".catalog__list");

const hideContent = () => {
  offerWrappers.forEach((item) => {
    item.classList.add("hidden");
    item.classList.remove("offers__wrapper--active");
  });

  offerButtons.forEach((item) => {
    item.classList.remove("offers__button--active");
  })
};

const showContent = (i = 0) => {
  offerWrappers[i].classList.remove("hidden");
  offerWrappers[i].classList.add("offers__wrapper--active");
  offerButtons[i].classList.add("offers__button--active");
};

hideContent();
showContent();

offerButtonsParent.addEventListener("click", (evt) => {
  const target = evt.target;
  if (target && target.classList.contains("offers__button")) {
    offerButtons.forEach((item, i) => {
      if(target === item) {
      hideContent();
      showContent(i);
      }
    });
  }
});

catalogButtonsParent.addEventListener("click", (evt) => {
  const target = evt.target;
if (target && target.classList.contains("catalog__button")) {
  catalogButtons.forEach((item, i) => {
    if (target === item) {
      hideContent();
      showContent(i);
    }
  });
}
});


