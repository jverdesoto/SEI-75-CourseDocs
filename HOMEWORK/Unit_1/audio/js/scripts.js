const myAudio = new Audio('https://samples-files.com/samples/Audio/mp3/sample-file-4.mp3')
myAudio.volume = 1
const slider = document.getElementById('customRange2')

// PLAY / PAUSE / STOP buttons
document.getElementById('play').addEventListener('click', () => {
    myAudio.play()
} )
document.getElementById('pause').addEventListener('click', () => {
    myAudio.pause()
} )
document.getElementById('stop').addEventListener('click', () => {
    myAudio.pause()
    myAudio.currentTime = 0
} )

// Volume Slider
slider.addEventListener('input', () => {
    const currentValue = slider.value

    //Adjusting the volume according to the slider position
    myAudio.volume = currentValue / 10

    
});
// switch(currentValue) {
//     case 0:
//         myAudio.volume = 0;
//         break;

//     case 1:
//         myAudio.volume = 0.1;
//         break;

//     case 2:
//         myAudio.volume = 0.2;
//         break;

//     case 3:
//         myAudio.volume = 0.3;
//         break;

//     case 4:
//         myAudio.volume = 0.4;
//         break;

//     case 5:
//         myAudio.volume = 0.5;
//         break;

//     case 6:
//         myAudio.volume = 0.6;
//         break;

//     case 7:
//         myAudio.volume = 0.7;
//         break;

//     case 8:
//         myAudio.volume = 0.8;
//         break;

//     case 9:
//         myAudio.volume = 0.9;
//         break;

//     case 10:
//         myAudio.volume = 1;
//         break;
// }


// using bootstrap create an audio player that:
// pause
// play
// stop
// option volume up volume down
// extra confident use the slider from bootstrap to control the audio