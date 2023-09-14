const myAudio = new Audio(
  "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav"
);

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const songPos = document.getElementById("songPos");
const volume = document.getElementById("volume");

songPos.value = myAudio.currentTime;
volume.value = myAudio.volume;
// const duration = myAudio.duration;
// songPos.setAttribute("max", duration);

playBtn.addEventListener("click", () => {
  myAudio.play();
});

pauseBtn.addEventListener("click", () => {
  myAudio.pause();
});

stopBtn.addEventListener("click", () => {
  myAudio.load();
  songPos.value = 0;
});

songPos.addEventListener("change", () => {
  myAudio.currentTime = songPos.value;
});

volume.addEventListener("input", () => {
  myAudio.volume = volume.value;
});
