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


function hammingDistance(stringA, stringB) {
    if (stringA.length !== stringB.length) {
        return NaN;
    }

        //separate the strings into an array
        const arrayA = stringA.split('');
        const arrayB = stringB.split('');
        console.log(arrayA);
        //keep a count
        let count = 0;
        //compare the array elements one by one
        for (let i= 0; i < arrayA.length; i++) {
            if (arrayA[i] !== arrayB[i]) {
                count++
            }
        };
        //return the count
        return count;
    }


module.exports = hammingDistance