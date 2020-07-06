const boxes = document.querySelectorAll(".box");
const counter = document.querySelector(".counter");
const digletts = document.querySelectorAll(".diglett");

let lastBox;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(boxes) {
  const index = Math.floor(Math.random() * boxes.length);
  const hole = boxes[index];
  if (hole === lastBox) {
    return randomHole(boxes);
  }
  lastBox = hole;
  return hole;
}

function peep() {
  const time = randomTime(500, 1000);
  const hole = randomHole(boxes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  counter.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function handleClick(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove("up");
  counter.textContent = score;
}

digletts.forEach((digglet) => digglet.addEventListener("click", handleClick));
