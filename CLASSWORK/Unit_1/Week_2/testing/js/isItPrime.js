//A prime number is a number that is divisible only by itself and 1 - for example 2, 3, 5, 7, 11. The number 1 is not a prime.

function isItPrime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;       //it has more than one number to divide itself evenly, so not prime
    }
  }
  return true;
}


module.exports = isItPrime