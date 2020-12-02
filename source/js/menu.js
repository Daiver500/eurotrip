var menu = document.querySelector(".navigation__toggle");
var menuSection = document.querySelector(".navigation__list");
var openBurger = document.querySelector(".navigation__open");
var closeCross = document.querySelector(".navigation__close");
var menuBackground = document.querySelector(".navigation__inner")

menu.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (menuSection.classList.contains("navigation__list--open")) {
    evt.preventDefault();
    openBurger.classList.remove("navigation__open--hide");
    closeCross.classList.remove("navigation__close--show");
    menuSection.classList.remove("navigation__list--open");
    menuBackground.classList.remove ("navigation__inner--background");
  } else {
      menuSection.classList.add("navigation__list--open");
      openBurger.classList.add("navigation__open--hide");
      closeCross.classList.add("navigation__close--show");
      menuBackground.classList.add ("navigation__inner--background");
  }
});
