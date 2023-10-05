function firstXPrimes(x) {
    const primes = [];
    //start from first prime
    let num = 2;
    // continue loop till x
    while (primes.length < x) {
        let isPrime = true;
        // square root divisibility
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        // if prime push to array
        if (isPrime) {
            primes.push(num);
        }
        // increment to check next num
        num++;
    }
    return primes;
}

function primesUptoX(x) {
    const primes = [];
    // goes from 2 to x
    for (let num = 2; num <= x; num++) {
        let isPrime = true;
        // square root
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        // push to array if prime
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
module.exports = { firstXPrimes, primesUptoX };
