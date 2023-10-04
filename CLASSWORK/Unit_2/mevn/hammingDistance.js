
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

module.exports = function hammingDistance(string1, string2){
    if(string1.length !== string2.length)
        return 'NaN';
    else{
        let counter = 0;
        for(let i=0; i<string1.length ; i++){
            if(string1.charAt(i) !== string2.charAt(i))
                counter++;
        }
        return counter;
    }
}

// console.log(hammingDistance('abc', 'abc')); //=> 0
// console.log(hammingDistance('a1c', 'a2c')); //=> 1
// console.log(hammingDistance('!!!!', '****')); //=> 4
// console.log(hammingDistance('abc', 'ab')); //=> NaN