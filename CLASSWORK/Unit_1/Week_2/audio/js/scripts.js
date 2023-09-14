// Get slider input element
const volEl = document.getElementById("volume")

// Create audio object
const myAudio = new Audio("./assets/AMALGAMATE - Backing.mp3")
myAudio.volume = volEl.value

// Event listeners
document.getElementById("playBtn").addEventListener('click', () => myAudio.play())
document.getElementById("pauseBtn").addEventListener('click', () => myAudio.pause())
document.getElementById("stopBtn").addEventListener('click', () => myAudio.load())
volEl.addEventListener('input', () => myAudio.volume = volEl.value)