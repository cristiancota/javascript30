window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector(".words");
const languageSelect = document.querySelector("#lang");
let p = document.createElement("p");
words.appendChild(p);

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

function setLanguage() {
  recognition.lang = this.value;
  recognition.abort();
  recognition.start();
}

recognition.addEventListener("result", (e) => {
  const transcript = [...e.results]
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
    words.scrollBy(0, 50); // TODO fix when multiple lines
  }
});

recognition.addEventListener("end", recognition.start);
recognition.start();
languageSelect.addEventListener("change", setLanguage);
