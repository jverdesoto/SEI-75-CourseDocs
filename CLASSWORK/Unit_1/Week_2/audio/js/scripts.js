const myAudio = new Audio("https://samplelib.com/lib/preview/mp3/sample-15s.mp3")

    // Using bootstrap create an audio player:
    // myAudio.pause()
    // myAudio.play()
    // stop
    // Optional volume up and down
    // Extra confident use the slider from bootstrap to control the audio


document.getElementById("playBtn").addEventListener('click', () => {
    myAudio.play()
})

document.getElementById("pauseBtn").addEventListener('click', () => {
    myAudio.pause()
})

document.getElementById("stopBtn").addEventListener('click', () => {
    myAudio.pause()
    myAudio.currentTime = 0;
})

document.getElementById("downBtn").addEventListener('click', () => {
    myAudio.volume -= 0.1;
})

document.getElementById("upBtn").addEventListener('click', () => {
    myAudio.volume += 0.1;
})

document.getElementById("volumeSlider").addEventListener('input', () => {
    myAudio.volume = volumeSlider.value;
})