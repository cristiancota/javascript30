const items = [...document.querySelectorAll("input[type=checkbox]")];

let lastChecked;

function handleClick(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    items.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("wacha we");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

items.forEach((item) => {
  item.addEventListener("change", function (e) {
    e.srcElement.parentElement.classList.toggle("selected");
  });

  item.addEventListener("click", handleClick);
});
