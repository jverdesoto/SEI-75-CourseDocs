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
 
module.exports = function isPalindrome(str)
{
    let reversedStr = str.split("").reverse().toString();
    reversedStr = reversedStr.replaceAll(',','');
    console.log(`the origin String: ${str} ,\nthe reversed: ${reversedStr}`);
    // remove all special charaters 
    return (removeSpecialCharaters(str.toUpperCase()) === removeSpecialCharaters(reversedStr.toUpperCase()))?true : false;
}

function removeSpecialCharaters(str){
    let sp = /[ &\/\\#,+()$~%.'":*?<>{}]/g;
    return str.replaceAll(sp, '').trim();

}

// console.log(isPalindrome('SEI Rocks'));// false

// console.log(isPalindrome('rotor')); //=> true
// console.log(isPalindrome('A nut for a jar of tuna')); //=> true
// console.log(isPalindrome('')); //=> true

// console.log(isPalindrome('Race car'))
// console.log(isPalindrome('hello'))
// console.log(isPalindrome('Radar'))