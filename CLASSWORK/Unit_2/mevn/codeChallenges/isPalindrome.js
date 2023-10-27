module.exports = function isPalindrome(string) {
    const newString = string.replace(/\s/g, '').toLowerCase();
    const palindrome = newString.split('').reverse().join('');

    return newString === palindrome
}


