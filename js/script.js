document.querySelector(".sounds").innerHTML = '<audio data-keycode="65" src="sounds/clap.wav"></audio><audio data-keycode="83" src="sounds/hihat.wav"></audio><audio data-keycode="68" src="sounds/kick.wav"></audio><audio data-keycode="70" src="sounds/openhat.wav"></audio><audio data-keycode="71" src="sounds/boom.wav"></audio><audio data-keycode="72" src="sounds/ride.wav"></audio><audio data-keycode="74" src="sounds/snare.wav"></audio><audio data-keycode="75" src="sounds/tom.wav"></audio><audio data-keycode="76" src="sounds/tink.wav"></audio>'

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