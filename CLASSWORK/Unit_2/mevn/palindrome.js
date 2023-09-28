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

// import { forEach } from "core-js/core/array"

// Your solution for 11-isPalindrome here:
const isPalindrome = function (text) {
    const noSpace = text.toLowerCase().split("")
    for (let i = 0; i < noSpace.length; i++) {
        if (noSpace[i] === " ") {
            noSpace.splice(i, 1)
        }
    }
    console.log(noSpace);
    const reverse = noSpace.reverse()
    console.log(reverse);
    const check = []
    for (let i = 0; i < reverse.length; i++) {
        if (reverse[i] === noSpace[i]) {
            check.push('true')
        } else{
            check.push('false')
        }
    }console.log(check);
}
isPalindrome('ashka')