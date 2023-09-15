const isPrimeFunction = require("../js/tesIsPrimeNumber");

/** 1. Create a function that receives a X number. Expected output is to present an array of X first prime numbers.
(For instance, if X=4, array must be 2, 3, 5, 7)
Also create a test for this function (set of results)
*/
function getFirstPrimeNumbers(number){
    const primes = [];
    let num = 0;
    console.log(primes.length);
    while(primes.length !== 4){
        if(isPrimeFunction(num))
            primes.push(num);  
        
        num++;
    }
    // console.log(primes);
    return primes;
}
module.exports = getFirstPrimeNumbers;