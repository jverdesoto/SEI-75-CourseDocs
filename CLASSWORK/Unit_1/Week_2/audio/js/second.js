
//wait for page to be fully loaded before running script
document.addEventListener("DOMContentLoaded", function () {
    // Get HTML elements by their IDs and store them in variables
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("play");
    const pauseBtn = document.getElementById("pause");
    const stopBtn = document.getElementById("stop");
    const skipBtn = document.getElementById("skip");
    const backBtn = document.getElementById("back");
    const loopBtn = document.getElementById("loop");
    const progress = document.getElementById("progress");
    const volume = document.getElementById("volume");
    const albumArt = document.getElementById("album-art");

    const tracks = [
        { src: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3", art: "http://placekitten.com/g/200/200" },
        { src: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3", art: "http://placekitten.com/200/200" },
        { src: "https://samplelib.com/lib/preview/mp3/sample-12s.mp3", art: "http://placekitten.com/g/200/200" },
        { src: "https://samplelib.com/lib/preview/mp3/sample-15s.mp3", art: "http://placekitten.com/200/200" },

    ];

    // Initialise variables to keep track of the current track and loop status
    let currentTrack = 0;
    let loop = false;

    // Set the initial audio source and album art
    audio.src = tracks[currentTrack].src;
    albumArt.src = tracks[currentTrack].art;

    // Add a click event listener to the play button to play the audio
    playBtn.addEventListener("click", function () {
        audio.play();
    });

    // Add a click event listener to the pause button to pause the audio
    pauseBtn.addEventListener("click", function () {
        audio.pause();
    });

    // Add a click event listener to the stop button to stop and reset the audio
    stopBtn.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0;
    });

    // skip button click event
    skipBtn.addEventListener("click", function () {
        // Increment(+1) current track index / wrap around if reaches end of track list
        currentTrack = (currentTrack + 1) % tracks.length;

        // Update to new track's URL
        audio.src = tracks[currentTrack].src;

        // Update the album art
        albumArt.src = tracks[currentTrack].art;

        // Play 
        audio.play();
    });


    // back button
    backBtn.addEventListener("click", function () {
        // Calculate the index of the previous track
        // wrap around to last track if currently at 1st track
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;

        // Set  audio source to prev track
        audio.src = tracks[currentTrack].src;

        // Set album art to the prev track's
        albumArt.src = tracks[currentTrack].art;
        // Play the audio
        audio.play();
    });


    //  click event listener to toggle loop button
    loopBtn.addEventListener("click", function () {
        loop = !loop;
        audio.loop = loop;

        // toggle loop button colour depending on click
        if (loop) {
            loopBtn.style.backgroundColor = "green";
        } else {
            loopBtn.style.backgroundColor = "";
        }
    });

    // Update the progress bar as the audio plays
    audio.addEventListener("timeupdate", function () {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    // song time when progress bar slides
    progress.addEventListener("input", function () {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });

    //  volume slider 
    volume.addEventListener("input", function () {
        audio.volume = volume.value;
    });
});


