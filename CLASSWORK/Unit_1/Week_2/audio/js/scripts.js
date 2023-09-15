//import
//the import keyword lets you import prototypes from other places


// This was my first attempt but I realised that 
const myAudio = new Audio("https://cdn.pixabay.com/audio/2023/09/06/audio_e648de43ac.mp3");

document.getElementById('playBtn').addEventListener('click', () => {
    myAudio.play();
})

document.getElementById('pauseBtn').addEventListener('click', () => {
    myAudio.pause();
    // to have the song pause
    // create a flag 1/0 or T/F 
    // when clicked the flag will change
    // include a conditional
})

document.getElementById('stopBtn').addEventListener('click', () => {
    myAudio.pause();
    myAudio.currentTime = 0;
})

document.getElementById('volumeSlider').addEventListener('input', () => {
    myAudio.volume = volumeSlider.value;
})

//String.prototype


// Using bootstrap create a music player
// pause
// play
// stop
// OPTIONAL volume
// use event listeners to pause, control volume, play and 
// create stop functionality // if stop pressed return to beginning



// const myAudio = new Audio("https://cdn.pixabay.com/audio/2023/09/06/audio_e648de43ac.mp3");

// const playBtn = document.getElementById('playBtn');
// const pauseBtn = document.getElementById('pauseBtn');
// const stopBtn = document.getElementById('stopBtn');
// const volumeSlider = document.getElementById('volumeSlider');

// playBtn.addEventListener('click', () => {
//     myAudio.play();
// });
// pauseBtn.addEventListener('click', () => {
//     myAudio.pause();
// });
// stopBtn.addEventListener('click', () => {
//     myAudio.pause();
//     myAudio.currentTime = 0;
// });
// volumeSlider.addEventListener('input', () => {
//     myAudio.volume = volumeSlider.value;
// });

