const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  //   video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
  toggle.textContent = this.paused ? "►" : "❚❚";
}

function skip(seconds) {
  if (typeof seconds === 'number') {
    video.currentTime += seconds;
  } else {
    video.currentTime += parseFloat(this.dataset.skip);
  }
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
});

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

function handleSpacebar(e) {
  if (e.keyCode === 32) {
    e.preventDefault();
    video.click();
  }

  if (e.keyCode === 37) {
    e.preventDefault();
    skip(-10);
  }

  if (e.keyCode === 39) {
    e.preventDefault();
    skip(10);
  }
}

window.addEventListener("keydown", handleSpacebar);
