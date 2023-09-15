const myAudio = new Audio('https://samplelib.com/lib/preview/mp3/sample-3s.mp3')
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

document.getElementById("play").addEventListener('click', () => {
    if(myAudio.paused) {
        myAudio.play()
    }else {
        myAudio.pause()
    }
})
document.getElementById("pause").addEventListener('click', () => {
        myAudio.pause()
})
document.getElementById("stop").addEventListener('click', () => {
    myAudio.pause()
    myAudio.currentTime = 0
})
document.getElementById("mute").addEventListener('click', () => {
    if (myAudio.volume === 0) {
        myAudio.volume = 1; 
    } else {
        myAudio.volume = 0; 
    }
})

volumeSlider.addEventListener('input', () => {
    const volume = parseFloat(volumeSlider.value);
    myAudio.volume = volume;
});


const styleAudio = document.getElementById('mediaPlayer').style
styleAudio.display = 'flex';
styleAudio.height = '300px';
styleAudio.width = '400px'; 



// Using bootstrap create an audio player that:
// pause()
// play()
// stop
// Optional Volume Up volume down
// Extra confindent use the slider from bootstrap to control the audio