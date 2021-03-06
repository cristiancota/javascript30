const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const checkAll = document.querySelector("#checkAll");
const uncheckAll = document.querySelector("#uncheckAll");
const clearList = document.querySelector("#clearList");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector("[name=item]").value;

  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
        <input type="checkbox" data-index="${i}" id="items${i}" ${
        plate.done ? "checked" : ""
      } />
        <label for="items${i}">${plate.text}</label>
        </li>
        `;
    })
    .join("");
}

function toggleDown(e) {
  if (!e.target.matches("input")) return;
  const element = e.target;
  const i = element.dataset.index;
  items[i].done = !items[i].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function handlecheckAll(e) {
  e.preventDefault();
  items.forEach((item) => {
    item.done = true;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function handleuncheckAll(e) {
  e.preventDefault();
  items.forEach((item) => {
    item.done = false;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function handleclearList(e) {
  e.preventDefault();
  localStorage.setItem("items", JSON.stringify([]));
  populateList([], itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDown);
checkAll.addEventListener("click", handlecheckAll);
uncheckAll.addEventListener("click", handleuncheckAll);
clearList.addEventListener("click", handleclearList);

populateList(items, itemsList);
