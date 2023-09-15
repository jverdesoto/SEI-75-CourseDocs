// Is this a Prime Number?

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= num-1; i++) {
        if (num % i === 0) {
            return false; 
    }

}
    return true; 
}
module.exports = isPrime;

// Create a function that receives an X number. 
// Expected output is to present an array of X 
// first prime numbers.  



function howManyPrimes(num) {
    const myPrimeArray = [];

    let startNum = 2;
    
    while (myPrimeArray.length < num) { 
        if (isPrime(startNum)) {
            myPrimeArray.push(startNum);
        }
         startNum++;
    }
    return myPrimeArray;
}

module.exports = howManyPrimes;

