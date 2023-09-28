const myAudio = new Audio('./srcAudio/702292__timbre__funky-funky-fever.mp3')

document.getElementById('playBtn').addEventListener('click', () => {
        myAudio.play()
    })

document.getElementById('pauseBtn').addEventListener('click', () => {
    myAudio.pause()
})

function stopAudio() {
    myAudio.pause();
    myAudio.currentTime = 0;
}

document.getElementById('stopBtn').addEventListener('click', ( )=>{
    stopAudio();
})

function volumeDown(){
    myAudio.volume = (myAudio.volume - 0.1);
}

document.getElementById('volDown').addEventListener('click', () => {
   if (myAudio.volume <= 1)
   volumeDown();
  else if (myAudio.volume = 0);
//   console.log('Volume 0');
})