
// class Audio {
//     constructor(link){
//         this.link = link
       
//     }
//     // stopBtn(){
//     //     myAudio.pause()

//     // }
//     playBtn(){
//         link.play()
//     }
// }
const myAudio = new Audio("https://samplelib.com/lib/preview/mp3/sample-3s.mp3")
// function displayStopBtn() {
    
//  }
document.getElementById('play').addEventListener('click', () =>{
    myAudio.play()
})
document.getElementById('pause').addEventListener('click', () =>{
    myAudio.pause()
})
document.getElementById('stop').addEventListener('click', () =>{
    var myPlayer = myAudio;
    myPlayer.pause();
    myPlayer.currentTime = 0;
})
document.getElementById('range').addEventListener('click', () =>{
    myAudio.pause()
    

})
