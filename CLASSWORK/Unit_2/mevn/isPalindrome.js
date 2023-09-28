function isPalindrome(word) {
    const wordArr = word.split(' ');
    const wordArrReversed = wordArr.map(word => word.split('').reverse().join(''));
    const wordReversed = wordArrReversed.join(' ');
    console.log('Original word/s:' + ' ' + word);
    console.log('Reversed word/s:' + ' ' + wordReversed);
    if (word===wordReversed) {
        console.log(word + ' ' + 'is a palindrome');
    }
    else {
        console.log(word + ' ' + 'is not a palindrome');
    }
}

isPalindrome("kayak");