function isPalindrome (string) {
    const lettersToCheck = []
    const newString = string.toLowerCase().split('');
    for (let i = 0; i < newString.length; i ++){
        if (newString[i] === ' '){
            newString.splice(i, 1)
        } else if (newString[i] === ','){
            newString.splice(i, 2)
        }
    }
    for (let j = newString.length-1; j > -1; j--){
        lettersToCheck.push(newString[j])
    }
    console.log(lettersToCheck.join(''));
    console.log(newString.join(''));
    if (newString.join('') === lettersToCheck.join('')) { 
        return true
    } return false
}


module.exports = { isPalindrome }


