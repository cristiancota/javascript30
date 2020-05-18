const checkboxes = [...document.querySelectorAll("input[type=checkbox]")];

let lastChecked;

function handleClick(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // toggle inBetween when is lastVisited or is the clicked, this way you can use shift either up or down select
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleClick);
});
