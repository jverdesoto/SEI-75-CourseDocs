function isPalindrome(str) {
    // check for empty or single letter strings
    if (str.length <= 1) return true;
  
    const letterArray = [];
  
    // converting to lowercase, remove spaces
    for (let letter of str) {
      if (letter !== ' ') letterArray.push(letter.toLowerCase());
    }
  
    // compare letters from both ends
    for (let i = 0, j = letterArray.length - 1; i < j; i++, j--) {
      if (letterArray[i] !== letterArray[j]) return false;
    }
  
    return true;
  }
  
//   // Test the function
//   console.log(isPalindrome('SEI Rocks')); // false
//   console.log(isPalindrome('rotor')); // true
//   console.log(isPalindrome('A nut for a jar of tuna')); // true
//   console.log(isPalindrome('')); // true

//   export default isPalindrome
module.exports = isPalindrome;
