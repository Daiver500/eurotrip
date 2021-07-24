const navigationToggleClose = document.querySelector(".navigation__toggle-close")
const navigationToggleOpen = document.querySelector(".navigation__toggle-open")
const navigationMenu = document.querySelector(".navigation__destinations")

const navigationClose = () => {
  navigationMenu.classList.add("navigation__hidden");
  navigationToggleClose.classList.add("hidden");
  navigationToggleOpen.classList.remove("hidden");
}

const navigationOpen = () => {
  navigationMenu.classList.remove("navigation__hidden");
  navigationToggleClose.classList.remove("hidden");
  navigationToggleOpen.classList.add("hidden");
}

navigationToggleClose.addEventListener("click", navigationClose);

navigationToggleOpen.addEventListener("click", navigationOpen);



