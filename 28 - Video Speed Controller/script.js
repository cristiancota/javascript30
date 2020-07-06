const control = document.querySelector(".control");
const bar = document.querySelector(".bar");
const video = document.querySelector("video");

control.addEventListener("mousemove", function (e) {
  const percent = (e.pageY - this.offsetTop) / this.offsetHeight;
  const max = 3;
  const min = 0.5;
  const playBackRate = percent * (max - min) + min;
  bar.style.height = `${percent * 100}%`;
  bar.innerHTML = `${playBackRate.toFixed(2)}x`
  video.playbackRate = playBackRate;
});
