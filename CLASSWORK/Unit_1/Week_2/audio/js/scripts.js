
//import bootstrap onto HMTL
//create a little player for that audio
    //play button .play()
    //pause button .pause()
    //stop button create a stop functionality (restart)
    //bonus fiddle with volume up and down 
    //use fontawesome for the icons



const myAudio = new Audio ("https://cdn.pixabay.com/audio/2023/08/26/audio_a6ee15a317.mp3")    

//play button

let flag = -1
const playBtn = document.getElementById('play')
playBtn.addEventListener('click', () =>{

    if(flag === -1){
        myAudio.play()
        flag = 1
        console.log(flag)
    }
    else {
        myAudio.pause()
        flag = -1
        console.log(flag)
    }
    
    //change the style -> probably change the class for styling?

})

//pause button
const pauseBtn = document.getElementById('pause')
pauseBtn.addEventListener('click', () =>{
    myAudio.pause()

})

//stop button
const stopBtn = document.getElementById('stop')
stopBtn.addEventListener('click', function () {
    myAudio.pause()
    console.log(myAudio.currentTime)
    myAudio.currentTime = 0
    console.log(myAudio.currentTime)
})

//volume controls
const volumeSlider = document.getElementById("customRange3")
volumeSlider.addEventListener('click', function(){
       myAudio.volume = volumeSlider.value*0.1 
})


//scroll along the song
    //identify the song position from the slider position change
    //make the audio current time the same as the slider position

//rewind and fast forward 
    //audio current position + a set amount

//what other events can I program it for?