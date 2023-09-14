//This line creates a new Audio object called myAudio. 
//This object will be used to play audio on your webpage.

const myAudio = new Audio()


// this is how it would look like if it was written as a class
// class AudioPlayer {
//     constructor() {
//       this.audio = new Audio();
//     }
//     playSound(audioSource) {
//       this.audio.src = audioSource;
//       this.audio.play();
//     }
//   }

//This line adds an event listener to an HTML element with the id "playBtn." 
//In plain English, it says, "When the element with the id 'playBtn' is clicked, execute the playSound function."

document.getElementById('playBtn').addEventListener('click', playSound)

//This is the definition of the playSound function. 
//It specifies what should happen when the "playBtn" is clicked.
function playSound() {
    //This line sets the source (URL) of the audio that you want to play. 
    //In this case, it's setting it to a sample audio file located at 
    myAudio.src = "https://samplelib.com/lib/preview/mp3/sample-3s.mp3";
    //his line plays the audio using the play method of the myAudio object. 
    //It starts playing the audio from the source specified earlier.
    myAudio.play() 

} 

document.getElementById('pauseBtn').addEventListener('click', pauseSound)


function pauseSound() {
    myAudio.src = "https://samplelib.com/lib/preview/mp3/sample-3s.mp3";
    myAudio.pause() //create a flag with true false include conditional
} 

document.getElementById('stopBtn').addEventListener('click', stopSound)

//to stop and start from tge beginning set currentTime to 0
function stopSound() {
    myAudio.src = "https://samplelib.com/lib/preview/mp3/sample-3s.mp3";
    myAudio.pause()
    //something to do with this.currentTime = 0 so its starts from the beggining
    myAudio.currentTime = 0;
} 



