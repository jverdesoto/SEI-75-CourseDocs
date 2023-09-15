function generateFirstXPrimes(X) {
    const primes = [];
    let num = 2;
  
    while (primes.length < X) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
    return primes;
  }



 modules.export = generateFirstXPrimes;