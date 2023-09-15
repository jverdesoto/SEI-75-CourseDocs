const myAudio = new Audio('https://instrumentalfx.co/wp-content/upload/11/Pac-Man-Theme-Song.mp3');


document.getElementById('playBTN').addEventListener('click', () => {
    myAudio.play()
})

document.getElementById('pauseBTN').addEventListener('click', () => {
    myAudio.pause()
})

document.getElementById('stopBTN').addEventListener('click', () => {
    myAudio.pause()
    myAudio.currentTime = 0;
})

document.getElementById('volDown').addEventListener('click', () => {
    myAudio.volume = 0.2
})
document.getElementById('volUp').addEventListener('click', () => {
    myAudio.volume = 0.8
})



