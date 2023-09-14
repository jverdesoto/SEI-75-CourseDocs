function primeArray(num) {
    //Establish return array 
    let returnArr = []

    //Function to check whether number is prime and return it
    function isPrime(num) {
        let factorCount = 0
        for (let i = 0; i <= num; i++) {
            if (num % i === 0) factorCount++
            if (factorCount > 2) break
        }
        return (factorCount === 2) ? num : null
    }

    //Run the isPrime function on every number up to num and push to the return array if prime
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) returnArr.push(isPrime(i))
    }

    return returnArr
}

module.exports = primeArray