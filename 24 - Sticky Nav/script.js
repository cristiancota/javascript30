const sticky = document.querySelector(".sticky");
const originalOffsetTop = sticky.offsetTop;

function handleScroll() {
  if (window.scrollY >= originalOffsetTop) {
    document.body.style.paddingTop = sticky.offsetHeight + "px";
    sticky.classList.add("fixed");
  } else {
    document.body.style.paddingTop = 0;
    sticky.classList.remove("fixed");
  }
}

window.addEventListener("scroll", handleScroll);
