/*-----------------------------------------------------------------
Challenge: hammingDistance
Difficulty: Intermediate
Prompt:
In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.
Examples:
hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------*/

// write function that takes two strings
//chech if strings are the same length
    //if they are not return NaN
//let count = 0 
//loop through charascters in string1 and string2
//compare each symbol at the same position within each string
//check if symbols are different in same position
    // IF increment count number by 1 each time is different
//return count of different symbols

function hammingDistance(string1, string2) {
    if (string1.length !== string2.length) {
        return NaN
    } 
    let count = 0
    for (let i = 0; i< string1.length; i++) {
        if (string1[i]!==string2[i]) {
            count ++
        }
    } return count
}