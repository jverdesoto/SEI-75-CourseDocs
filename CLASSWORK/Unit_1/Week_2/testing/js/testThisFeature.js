// function isEven(num) {
//     return num % 2 === 0
// }

// function isLongerThan5(string) {
//     return string.length > 5
// }

// module.exports = isEven 
// module.exports = isLongerThan5

function isPrime(num) {
    let numSqRt = Math.sqrt(num)
    let factorCount = 0
    for (let i = 2; i <= numSqRt; i++) {
        if (num % i === 0) { factorCount++ }
    }
    console.log(`${num} has ${factorCount} factors`);
    return factorCount === 0
}

isPrime(0)
isPrime(1)
isPrime(5)
isPrime(61)
isPrime(55)

module.exports = isPrime