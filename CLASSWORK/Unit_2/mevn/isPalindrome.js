
module.exports = isPalindrome;

function isPalindrome(inputstring) {

const string = inputstring.replace(/[\s,]/g, '').toLowerCase()
const reversestring = string.split('').reverse().join('')
    if(string === reversestring) {
        return true
    } else if (inputstring === 0 || inputstring === 1 ){
        return true
    } else {
        return false
    }
}
