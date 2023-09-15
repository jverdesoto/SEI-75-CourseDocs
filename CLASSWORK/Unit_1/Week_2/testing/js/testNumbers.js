function isPrimeFunction(number){
    const isPrime = true;
    if(number > 1)
    {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }

    } else{
        isPrime = false;
    }
    return isPrime;
}

module.exports = isPrimeFunction;