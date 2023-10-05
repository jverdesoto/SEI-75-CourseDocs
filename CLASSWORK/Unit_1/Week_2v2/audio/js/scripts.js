// Exercise 1: Basic Audio Player
function playAudio(id) {
    const audio = document.getElementById(id);
    audio.play();
  }
  
  function pauseAudio(id) {
    const audio = document.getElementById(id);
    audio.pause();
  }
  
  function stopAudio(id) {
    const audio = document.getElementById(id);
    audio.pause();
    audio.currentTime = 0;
  }
  
  // Exercise 2: Dynamic Audio Element
  const dynamicAudio = new Audio('audio-file1.mp3');
  function dynamicPlay() {
    dynamicAudio.play();
  }
  
  function dynamicPause() {
    dynamicAudio.pause();
  }
  
  function dynamicStop() {
    dynamicAudio.pause();
    dynamicAudio.currentTime = 0;
  }
  
  // Exercise 3: Loop Control
  function toggleLoop(id) {
    const audio = document.getElementById(id);
    audio.loop = !audio.loop;
  }
  
  // Exercise 4: Volume Control
  function changeVolume(id) {
    const audio = document.getElementById(id);
    const volume = document.getElementById('volumeControl').value;
    audio.volume = volume;
  }
  
  // Exercise 5: Multiple Audio Sources
  function changeAudioSrc(id) {
    const audio = document.getElementById(id);
    const selectedSrc = document.querySelector('input[name="audioSrc"]:checked').value;
    audio.src = selectedSrc;
    audio.load();
  }