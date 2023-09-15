function isPrime(num) {
    if (num <= 1) {
        return false; // Prime numbers must be greater than 1
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Prime numbers are not divided by any other numbers but themselves
        }
    }

    return true; // If you can't divide by any number other than 1 and itself, it's prime
}

const number = 69

if(isPrime(number)) {
    console.log(`The number ${number} is a prime number`);
}else {
    console.log(`The number ${number} is not a prime number`);
}

module.exports = isPrime;


