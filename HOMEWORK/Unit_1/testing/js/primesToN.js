const checkPrime = require("./checkPrime");

function primesToN(num) {
  let array = [];
  let active = true;
  let val = 2;
  if (num < 0) return "Error: num must be +";
  if (num <= 1) return array;
  while (active) {
    if (checkPrime(val)) {
      array.push(val);
    }
    if (val >= num) active = false;
    val++;
  }
  return array;
}

module.exports = primesToN;
