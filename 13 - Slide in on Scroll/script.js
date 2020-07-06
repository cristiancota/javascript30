function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll("img");

function handleScroll(e) {
  images.forEach((image) => {
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    console.log("slideInAt " + slideInAt);
    console.log("imageBottom " + imageBottom);
    console.log("isHalfShown " + isHalfShown);
    console.log("isNotScrolledPast " + isNotScrolledPast);

    if (isHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }

    console.log(" =================== ");
  });
}

window.addEventListener("scroll", debounce(handleScroll));
