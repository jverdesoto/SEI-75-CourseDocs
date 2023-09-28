module.exports = function isPalindrome(string) {
    if (string.length <= 1) {
        return true 
    }
    let newString = string.replace(/\s/g, '').toLowerCase()
    let palString = newString.split('').reverse('').join('')
    return newString === palString
    // console.log(newString === palString)
} 

function hammingDistance(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log(NaN);
    }
    for (let i = 0; i < arr1.length; i++) {
        let total = 0
        if (arr1[i] !== arr2[i]) {
            total + 1
        }
    }
    console.log(total)
}

hammingDistance('abc', 'ab')