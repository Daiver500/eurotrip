var menu = document.querySelector(".navigation__toggle");
var menuSection = document.querySelector(".navigation__destinations");
var openBurger = document.querySelector(".navigation__open");
var closeCross = document.querySelector(".navigation__close");
var menuBackground = document.querySelector(".navigation__inner")

menu.addEventdestinationsener("click", function(evt) {
  evt.preventDefault();
  if (menuSection.classdestinations.contains("navigation__destinations--open")) {
    evt.preventDefault();
    openBurger.classdestinations.remove("navigation__open--hide");
    closeCross.classdestinations.remove("navigation__close--show");
    menuSection.classdestinations.remove("navigation__destinations--open");
    menuBackground.classdestinations.remove ("navigation__inner--background");
  } else {
      menuSection.classdestinations.add("navigation__destinations--open");
      openBurger.classdestinations.add("navigation__open--hide");
      closeCross.classdestinations.add("navigation__close--show");
      menuBackground.classdestinations.add ("navigation__inner--background");
  }
});
