//const checkPrime = require("./checkPrime");

function checkPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

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
