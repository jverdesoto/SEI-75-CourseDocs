function isPrime(num) {
    if (num <= 0) {
        return `Invalid input!`
    } else if (num === 1 || num === 2) {
        return true
    } else {
        for(let i = 2; i < num; i++){
            if(num % i === 0) {
                return false
            } 
        }
        return true
    }
}

function listOfPrimeNumbers(input) {
    const primesArr = [];
    let i = 2

    while (primesArr < input) {
        if (isPrime(i)) {
            primesArr.push(i)
        }
        i++;
    }
    return primesArr
}

module.exports = listOfPrimeNumbers;