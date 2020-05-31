const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const languagesDropdown = document.querySelector('[name="language"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
let voices = [];
let language = "en"; // English as defualt

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = speechSynthesis.getVoices();

  //populate voices dropdown
  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes(language))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");

  //populate languages dropdown
  const languages = voices.map((voice) => voice.lang.split("-")[0]);
  languagesDropdown.innerHTML = Array.from(new Set(languages))
    .sort((a, b) => {
      return a > b ? 1 : -1;
    })
    .map((language) => {
      return `<option value="${language}">${language}</option>`;
    })
    .join("");

  languagesDropdown.value = language;
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

function hangleChangeLanguage() {
  language = this.value;
  populateVoices();
  setVoice.call(voicesDropdown);
}

speechSynthesis.addEventListener("voiceschanged", () => populateVoices());
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
languagesDropdown.addEventListener("change", hangleChangeLanguage);
