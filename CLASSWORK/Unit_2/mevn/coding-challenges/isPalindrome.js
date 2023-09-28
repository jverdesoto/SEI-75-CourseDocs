/*-----------------------------------------------------------------
Challenge: 11-isPalindrome
Difficulty: Intermediate
Prompt:
- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.
Examples:
isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

module.exports = function isPalindrome(string) {
    // Remove capitals and convert to array
    const stringArr = string.toLowerCase().split('')
    // Look at letters only
    const lettersOnly = []
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let character of stringArr) {
        for (let letter of alphabet) {
            if (character === letter) lettersOnly.push(character)
        }
    }
    // Reverse array
    const reversedArr = lettersOnly.toReversed()
    // Change back into strings
    const newString = lettersOnly.join('')
    const revString = reversedArr.join('')
    // Check whether they are the same
    return newString === revString
}