function isPrimeFunction(number){
    let isPrime = true;
    if(number > 1)
    {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else{
        isPrime = false;
    }
    return isPrime;
}

module.exports = isPrimeFunction;