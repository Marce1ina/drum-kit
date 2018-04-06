window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector('audio[data-keycode="' + e.keyCode + '"]');
    const key = document.querySelector('.key[data-keycode="' + e.keyCode + '"]');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(function (item) {
    item.addEventListener('transitionend', removeTransition)
});

function removeTransition() {
    this.classList.remove('playing')
};