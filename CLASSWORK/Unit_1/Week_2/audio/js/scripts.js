console.log("hi")

const myAudio = new Audio ('https://samplelib.com/lib/preview/mp3/sample-15s.mp3')


const playbtn = document.getElementById("playbtn" )
console.log(playbtn)
document.getElementById("playbtn").addEventListener('click', () => {
    console.log("clicked")
    myAudio.play();
})
  document.getElementById("pausebtn").addEventListener('click', () => {
    myAudio.pause();
   
})
  document.getElementById("stpbtn").addEventListener('click', () => {
    myAudio.pause();
    my.currentTime = 0;
})






//  document.getElementsByClassName('btn btn-light').addEventListener('click', () => {

    //myAudio.play()
//})

//document.getElementsByClassName('btn btn-light').addEventListener('click', () => {

    //myAudio.play()
//}) 