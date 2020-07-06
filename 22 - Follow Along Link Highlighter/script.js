const triggers = document.querySelectorAll("a");
const highlight = document.querySelector(".highlight");

function handleHighlight() {
  const boundingclientRect = this.getBoundingClientRect();
  const coords = {
    width: boundingclientRect.width + 8,
    height: boundingclientRect.height + 4,
    top: boundingclientRect.top + window.scrollY - 2,
    left: boundingclientRect.left + window.scrollX - 4,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", handleHighlight));