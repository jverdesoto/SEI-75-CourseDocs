//function for a number to test whether it is prime or not 

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

module.exports = isPrime;