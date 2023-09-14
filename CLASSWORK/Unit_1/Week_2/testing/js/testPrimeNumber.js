// function isPrimeNumber(num) {
//     for (let i = n; i<=num.lenght; i ++  )
// }


// console.log(isPrimeNumber(27));

// module.exports = isPrimeNumber;

// LUKE 2. the code below tests for primes
function isPrimeNumber(num) {

    if (num < 2) { num ===1
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;

        }

    }

    return true;
}

// function isPrimeNumber(num) {

//     This line defines a function named isPrimeNumber that takes a single argument, num.
//     if (num < 2) {
    
//     This line checks if the input number num is less than 2.
//     If num is less than 2, it means it's not a prime number because prime numbers are greater than 1.
//     In this case, the function immediately returns false, indicating that num is not a prime number.
//     for (let i = 2; i <= Math.sqrt(num); i++) {
    
//     This line starts a loop that iterates through numbers from 2 to the square root of num (inclusive).
//     The loop is used to check if num is divisible by any number other than 1 and itself.
//     i is the current number being tested.
//     if (num % i === 0) {
    
//     Inside the loop, this line checks if num is evenly divisible by i (i.e., if there is no remainder when dividing num by i).
//     If there's no remainder (i.e., num % i equals 0), it means num can be divided by a number other than 1 and itself.
//     return false;
    
//     If the condition in line 4 is met (i.e., num is divisible by i), the function immediately returns false, indicating that num is not a prime number.
//     }
    
//     This curly brace marks the end of the for loop.
//     }
    
//     This curly brace marks the end of the if statement from line 2.
//     return true;
    
//     If the loop completes without finding any divisors for num, it means that num is not divisible by any number other than 1 and itself.
//     In this case, the function returns true, indicating that num is a prime number.
//     So, in summary, this function checks if a given number num is prime by first excluding numbers less than 2, then iterating through numbers from 2 to the square root of num, checking for any divisors. If it finds a divisor, it returns false; otherwise, it returns true.

//Matt
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= num-1; i++) {
//         if (num % i === 0) {
//             return false; 
//     }

// }
//     return true; 
// }
// module.exports = isPrime;

console.log(isPrimeNumber(27));

module.exports = isPrimeNumber;