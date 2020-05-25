const timeNodes = [...document.querySelectorAll("[data-time]")];
let seconds = timeNodes
  .map((node) => {
    return node.dataset.time;
  })
  .map((time) => {
    const [mins, secs] = time.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((a, b) => a + b);

const hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;

const minutes = Math.floor(seconds / 60);
seconds = seconds % 60;

console.log("Total time: " + hours + ":" + minutes + ":" + seconds);
