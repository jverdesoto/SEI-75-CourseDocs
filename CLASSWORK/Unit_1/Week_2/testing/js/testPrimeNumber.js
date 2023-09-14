// function isPrimeNumber(num) {
//     for (let i = n; i<=num.lenght; i ++  )
// }


// console.log(isPrimeNumber(27));

// module.exports = isPrimeNumber;

// LUKE 2. the code below tests for primes
function isPrimeNumber(num) {

    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;

        }

    }

    return true;
}

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