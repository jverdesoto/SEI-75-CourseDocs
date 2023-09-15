const myAudio = new Audio('./assets/the-best-jazz-club-in-new-orleans-164472.mp3')
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');


document.getElementById('playBtn').addEventListener('click', () => {
    myAudio.play()

})

document.getElementById('pauseBtn').addEventListener('click', () => {
    myAudio.pause()

})

document.getElementById('stopBtn').addEventListener('click', () => {
    myAudio.pause();
    myAudio.currentTime = 0;

})

volumeSlider.addEventListener('input', () => {
    const volume = parseFloat(volumeSlider.value)/100;
    myAudio.volume = volume;
    const volumePercentage = (volume * 100).toFixed(0);
    volumeValue.textContent = `${volumePercentage}%`;
    
});


//play
//pause
// stop
// vol up and down
// use slider from bootstrap to control audio
