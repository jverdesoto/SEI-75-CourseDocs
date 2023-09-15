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

//1. Create a function that receives a X number. Expected output is to present an array of X first prime numbers.
//(For instance, if X=4, array must be 2, 3, 5, 7)
function generateFirstXPrimes(x) { //function that receives a 'x' number
    const primes = [] //this is an array
    let num = 2 // to start with the first prime number
    //! had to change num from a const to a let

    while (primes.length < x) { //while the amount of numbers is less than x
        if (isPrime(num)) { //if the number is prime
            primes.push(num); // push it to the array
        }
        num++ //go counting numbers
        //! because it wasn't letting me assign a new value here
    }
    return primes
}

const x = 6 // giving a value for x
const primeArray = generateFirstXPrimes(x) // calling the function on a constant
console.log(`The first ${x} prime numbers are: ${primeArray}`);

module.exports = generateFirstXPrimes;