function primeTest (x) {
console.log(x);
if (x < 2) {
return false
}
for(i = 2; i <=Math.sqrt(x); i++) {
 if (x % i === 0){
 return false;
 }
}
return true;

}


function generateFirstXPrimes(x) {
    const primes = [];
    let num = 2;
  
    while (primes.length < x) {
      if (primeTest(num)) {
        primes.push(num);
      }
      num++;
    }
  console.log(primes);
    return primes;
  }



 module.exports = generateFirstXPrimes;