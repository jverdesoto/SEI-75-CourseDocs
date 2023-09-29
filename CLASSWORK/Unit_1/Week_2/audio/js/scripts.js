// // import { log } from "console"

// // import { log } from "console";

// const myAudio = new Audio(
//   "https://samplelib.com/lib/preview/mp3/sample-15s.mp3"
// );

// // Using bootstrap create an audio player:
// // myAudio.pause()
// // myAudio.play()
// // stop
// // Optional volume up and down
// // Extra confident use the slider from bootstrap to control the audio

// document.getElementById("playBtn").addEventListener("click", () => {
//   myAudio.play();
// });

// document.getElementById("pauseBtn").addEventListener("click", () => {
//   myAudio.pause();
// });

// document.getElementById("stopBtn").addEventListener("click", () => {
//   myAudio.pause();
//   myAudio.currentTime = 0;
// });

// document.getElementById("downBtn").addEventListener("click", () => {
//   myAudio.volume -= 0.1;
// });

// document.getElementById("upBtn").addEventListener("click", () => {
//   myAudio.volume += 0.1;
// });

// document.getElementById("volumeSlider").addEventListener("input", () => {
//   myAudio.volume = volumeSlider.value;
// });

// function isPalindrome(string) {
//     if (string.length <= 1) {
//         return true
//     }
//     reversedString = []
//     let newString = string.replace(/\s/g, '').toLowerCase()
//     let palString = newString.split('').reverse('').join('')
//     // return newString === palString.join
//     console.log(newString === palString)
// }

// isPalindrome('A nut for a jar of tuna')

function hammingDistance(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(NaN);
  }
  let total = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      total++;
    }
  }
  console.log(total);
}

hammingDistance("!!!!", "****");

let arr = [
  [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ],
];

function isPairs(arr) {
  let result = arr.map(function (subArr) {
    return subArr.reduce(function (acc, data) {
      acc[data[0]] = data[1];
      return acc;
    }, {});
  });
  console.log(result);
}
// let result = arr.map(function (subArr) {
//     return subArr.reduce(function (acc, data) {
//         acc[data[0]] = data[1];
//     return acc;
//   }, {});
// });

console.log(isPairs(arr));

function mumble(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    result += char.repeat(i + 1);
  }
  return result.split('').join('-');
}

console.log(mumble('abc'))