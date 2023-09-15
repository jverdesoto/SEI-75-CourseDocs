function isEven(num) {
    return num % 2 === 0
}


function isPrime(num) {
    if (num===1) {
        return false;
    } else if (num===2) {
        return true;
    } else {
        for(i = 2; i < num; i++) {
            if(num % i === 0) {
                return false
            }
        }
        return true;
    }
}

// Create 2 functions
// Get the output to be the next 10 prime numbers
// Output all the prime numbers from 0-num

function findNextPrimes(startingNum) {
    let primes = []

    while (primes.length < 10) {
        if (isPrime(startingNum)) {
            primes.push(startingNum);
        }
        startingNum++
    }
    return primes;
}

function getPrimesUpTo(limit) {
    let primes = []

    for (let num = 2; num < limit; num ++) {
        if (isPrime(num)) {
            primes.push(num)
        }
    }
    return primes
}

// module.exports = isPrime;

module.exports = [
    isPrime,
    findNextPrimes,
    getPrimesUpTo
]