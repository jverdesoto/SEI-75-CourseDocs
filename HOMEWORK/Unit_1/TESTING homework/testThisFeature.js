// 1. the code below tests for even numbers
// function isEven(num) {
//     return num % 2 === 0
// }

// module.exports = isEven;


// 2. the code below tests for primes
// function isPrime(num) {

//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;

//         }

//     }

//     return true;
// }

// console.log(isPrime(11));

// module.exports = isPrime;

// homework 1.
function getAllPrimeNumbers(num) {
    let array = [];
    for (let i = 2; array.length < 4; i++) {
        let isPrime = true
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            array.push(i);
        }

    }
    return array;
}
// console.log(getAllPrimeNumber(5));
// console.log(getAllPrimeNumber(7));
// console.log(getAllPrimeNumber(3));
// console.log(getAllPrimeNumber(11));

module.exports = getAllPrimeNumbers;

// homework 2

function generatePrimes() {
    let primes = [],
    let num = 2;

    while (primes.length < cound) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++
    }

    return primes
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;
}





// 1. Create a function that receives a X number. Expected output is to present an array of X first prime numbers.

// (For instance, if X=4, array must be 2, 3, 5, 7)

// Also create a test for this function (set of results)

// 2. Create a function that receives a X number. Expected output is to present an array with prime numbers from 0 to X.

// (For instance, if X=15, array must be 2, 3, 5, 7, 11, 13)

// Also create a test for this function.



// write a function that will test if a number is prime
// write a test for it
// stick to one function per file and one test per function
// this is unit testing - single unit / function testing
// as soon as you write the function think about the logic behind it
// how can I test if a number is prime
// then write the function
// function should return a true or a false