//pseudo code
// write a fucntion that takes a string as an argument
//the function should return true or false if the characters in the string are the same in ascending order
// and descending order
// so a true value will be a string that fulfils this condition
// whereas a false value will be a string that does not satisfy this condition
// this means the function has iterate through the string, keeping track of the position of each letter
// then go the other way, and compare the ascending order to the descending one

export function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    str = str.replace(/\s/g, '').toLowerCase();

    // Compare the original string with its reverse
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// Another way
// function isPalindrome(str) {
//     const cleanString = str.replace(/[\W_]/g, '').toLowerCase();;
//       const strArray = cleanString.split("")
//       for (let i = 0; i < strArray.length / 2; i++) {
//           if (strArray[i] !== strArray[strArray.length - 1 - i])
//           return false
//       };
//       return true
//   }

  isPalindrome('race car')
console.log(isPalindrome('race car'))