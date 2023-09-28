// (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if
        (num1 < num2) {
        return num2
    } else {
        return num1
    }
}

// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfTwoNumbers(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
    // Convert the character to lowercase to handle both uppercase and lowercase vowels
    char = char.toLowerCase();

    // Check if the character is one of the vowels
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}


// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function (arr) {
    const sum = [].reduce((partialSum, a) => partialSum + a, 0);

    let sum2 = 0
    for (let i = 0; i < arr.length; i++)
        sum2 += arr[i]
}
return sum, sum2


// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum *= arr[i]
    }
    return sum
}

// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function () {
    return arguments.length
};

// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string “ratskcor”.

function reverseString(str) {
    revStr = str.split('').reverse().join('')
}
return revStr

// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function (arr) {

    let longestLength = 0
    for (let i = 0; i < length.arr; i++) {
        const currentLength = arr[i].length;
        if (currentLength > longestLength) {
            longestLength = currentLength;

    }

}
}

// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].