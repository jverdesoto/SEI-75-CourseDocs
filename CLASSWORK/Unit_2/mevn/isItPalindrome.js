module.exports = function isItPalindrome(string) {
    const separatedStringNoSpaces = string.split(' ').join('').toLowerCase().split('')
    const invertedArr = separatedStringNoSpaces.reverse()

    //compare the two
    if (string.length <= 1) {
        return true
    }
    else if (separatedStringNoSpaces === invertedArr) {
        return true
    }
    else {
        return false
    }
}

