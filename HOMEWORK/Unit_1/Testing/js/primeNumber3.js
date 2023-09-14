function isPrime(num) {
    if (num <= 1) {
        return false; // Prime numbers must be greater than 1
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Prime numbers are not divided by any other numbers but themselves
        }
    }

    return true; // If you can't divide by any number other than 1 and itself, it's prime
}

//2. Create a function that receives a X number. Expected output is to present an array with prime numbers from 0 to X.
//(For instance, if X=15, array must be 2, 3, 5, 7, 11, 13)

function generatePrimesUpTo(x) { //function that receives a 'x' number
    const primes = [] //this is an array
    for (let num = 2; num <= x; num++) { //for every number from 2 to under or equal to x, add 1
        if (isPrime(num)) { //and if the number is prime
            primes.push(num); // push it to the array
        }
    }

    return primes
}

const x = 50 // giving a value for x
const primeArray = generatePrimesUpTo(x) // calling the function on a constant
console.log(`The prime numbers up to ${x} are: ${primeArray}`);

module.exports = generatePrimesUpTo;