const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.strokeLine = "#000111";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

let lastX = 0,
  lastY = 0,
  isDrawing = false,
  hue = 0,
  increasingWidth = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 80%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (ctx.lineWidth >= 20 || ctx.lineWidth <= 1) {
    increasingWidth = !increasingWidth;
  }

  if (increasingWidth) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function stopDrawing() {
  isDrawing = false;
  increasingWidth = true;
  ctx.lineWidth = 1;
}

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
document.getElementById("clear").addEventListener("click", clearCanvas);
