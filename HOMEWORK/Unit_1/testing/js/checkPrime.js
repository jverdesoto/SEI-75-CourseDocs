function checkPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

module.exports = checkPrime;
