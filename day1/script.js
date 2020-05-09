const playSound = function (e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var button = document.querySelector(`.button[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    button.classList.add('playing');
};

const removePlayingClass = function (e) {
    if (e.propertyName == 'transform') {
        this.classList.remove('playing');
    }
};

window.addEventListener("keydown", playSound);
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('transitionend', removePlayingClass)
})