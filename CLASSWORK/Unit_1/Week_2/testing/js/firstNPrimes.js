const checkPrime = require("./checkPrime");

function firstNPrimes(num) {
  let array = [2];
  if (num < 1) return "Error: num must be +";
  if (num === 1) return array;
  let val = 3;
  while (array.length < num) {
    if (checkPrime(val) === true) {
      array.push(val);
    }
    val++;
  }
  return array;
}

module.exports = firstNPrimes;
