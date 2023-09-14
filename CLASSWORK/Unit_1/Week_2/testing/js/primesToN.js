function checkPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

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

console.log(primesToN(7));

module.exports = primesToN;
