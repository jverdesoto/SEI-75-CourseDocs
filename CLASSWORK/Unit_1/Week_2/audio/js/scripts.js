
const myAudio = new Audio("https://samplelib.com/lib/preview/mp3/sample-3s.mp3");
const progressBar = document.getElementById('progressBar');
progressBar.style.margin = '20px';

const progressUpdate = document.querySelector('.progress-bar');
progressBar.addEventListener('change',() => {
    progressUpdate.style.width = '50px';
});


// play
document.getElementById('playBtn').addEventListener('click',() => {
    myAudio.play();
    // .css('width', valeur+'%').attr('aria-valuenow', valeur); 
    // progressBar.style.valuenow = '10';
    console.log(`start time : ${myAudio.currentTime}`);
    progressUpdate.style.width = `${myAudio.currentTime}%`;
});

// pause
document.getElementById('pauseBtn').addEventListener('click',() => {myAudio.pause();});

// stop
document.getElementById('stopBtn').addEventListener('click',() => {
    myAudio.pause();
    myAudio.currentTime = 0;
});

// go play forward 
document.getElementById('forwardBtn').addEventListener('click',() => {
   forwordAudio(10);
});
function forwordAudio(intervalTimming){
    if(myAudio.currentTime < myAudio.ariaValueMax && intervalTimming > 0)
    {
        replay(myAudio.currentTime + intervalTimming); 
    }
}

// go backword
document.getElementById('backwordBtn').addEventListener('click',() => {
    backwordAudio(10);
 });
function backwordAudio(intervalTimming){
    if( myAudio.currentTime > myAudio.ariaValueMin && intervalTimming > 0)
    {

        replay(myAudio.currentTime - intervalTimming); 
    }
}

// reply
function replay(newTime){
    myAudio.pause();
    myAudio.currentTime = newTime;
    console.log(`current time : ${myAudio.currentTime}`);
    progressUpdate.style.width = `${newTime}%`;
    myAudio.play(); 
}

// Using bootstrap create an audio player that:
    // puse()
    // play()
    // stop
    // Optional Volume Up volume down
    // Extra confindent use the slider from bootstrap to contol the audio
