// function isEven(num) {
//     return num % 2 === 0
// }

// function isLongerThan5(string) {
//     return string.length > 5
// }

// module.exports = isEven 
// module.exports = isLongerThan5

function isPrime(num) {
    let factorCount = 0
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) { factorCount++ }
    }
    return factorCount <= 2
}

isPrime(0)
isPrime(1)
isPrime(5)
isPrime(61)
isPrime(55)

module.exports = isPrime