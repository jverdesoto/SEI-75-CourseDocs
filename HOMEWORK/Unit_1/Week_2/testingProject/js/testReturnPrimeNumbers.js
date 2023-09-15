const isPrimeFunction = require("./tesIsPrimeNumber");
/** 2. Create a function that receives a X number. Expected output is to present an array with prime numbers from 0 to X.
(For instance, if X=15, array must be 2, 3, 5, 7, 11, 13)
Also create a test for this function*/

function getPrimeNumbers(number){
    const primes = [];
    for(let i=0;i<number;i++){
        if(isPrimeFunction(i))
        {
            primes.push(i);
        }
    }
    console.log(primes);
    return primes;
}
module.exports = getPrimeNumbers;
