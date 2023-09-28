// /*-----------------------------------------------------------------
// Challenge: hammingDistance
// Difficulty: Intermediate
// Prompt:
// In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
// - Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
// - The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
// - If the strings are not of the same length, the function should return NaN.
// Examples:
// hammingDistance('abc', 'abc'); //=> 0
// hammingDistance('a1c', 'a2c'); //=> 1
// hammingDistance('!!!!', '****'); //=> 4
// hammingDistance('abc', 'ab'); //=> NaN
// -----------------------------------------------------------------*/

// // first check if the length of each string is the same
// // then turn the string into an array 
// // then loop through each array comparing the value 
// // if a comparison is false, then ++ a counter variable
// // return that variable

// function hammingDistance(string1, string2) {
//     let string1AsArray = Array.from(string1);
//     let string2AsArray = Array.from(string2);
//     let combinedArray = string1AsArray.concat(string2AsArray);

//     let firstLetterForComparison = combinedArray.length / 2;

//     let fuzzyCount = 0;

//     if (string1.length !== string2.length) {
//         return NaN;
//     }

//     for (let i = 0; i < combinedArray.length / 2; i++) {
//         if (combinedArray[i] !== combinedArray[firstLetterForComparison]) {
//             fuzzyCount++;
//         }
//         firstLetterForComparison++;
//     }

//     return fuzzyCount;
// }

// let test = hammingDistance('george', 'geolge')
// console.log(test)

function hammingDistance(string1, string2) {
    let fuzzyCount = 0;

    if (string1.length !== string2.length) {
        return NaN;
    }

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            fuzzyCount++;
        }
    }
    return fuzzyCount;
}

let distance = hammingDistance("rick", "rock");
console.log(distance);
