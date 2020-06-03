const dropdownBackground = document.querySelector(".dropdownBackground");
const nav = document.querySelector("nav");
const navLists = document.querySelectorAll(".nav-list > li");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.add("trigger-enter-active"), 150);
  dropdownBackground.classList.add('open');

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
  }

  dropdownBackground.style.width = `${coords.width}px`;
  dropdownBackground.style.height = `${coords.height}px`;
  dropdownBackground.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  dropdownBackground.classList.remove('open');
}

navLists.forEach((list) => list.addEventListener("mouseenter", handleEnter));
navLists.forEach((list) => list.addEventListener("mouseleave", handleLeave));
