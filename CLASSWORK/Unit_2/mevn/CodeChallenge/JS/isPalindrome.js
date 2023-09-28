
module.exports = function isPalindrome(str) {
   const newStr = str.replace(/\s/g, '').toLowerCase();
   const palStr = newStr.split('').reverse().join('')
    return newStr === palStr 
}
     