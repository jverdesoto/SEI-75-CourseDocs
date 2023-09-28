// Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
// A palindrome is a word or phrase that are the same forward or backward.
// Casing and spaces are not included when considering whether or not a string is a palindrome.
// If the length of the string is 0 or 1, return true.

//Examples:
//isPalindrome('SEI Rocks'); //=> false
//isPalindrome('rotor'); //=> true
//isPalindrome('A nut for a jar of tuna'); //=> true
//isPalindrome(''); //=> true

module.exports = function isPalindrome(str) {
    if (str.lenght <= 1) {
    return true
    }

    str = str.replace(/\s/g, '').toLowerCase()
    const revString = str.split('').reverse().join('')

    return str === revString
}

