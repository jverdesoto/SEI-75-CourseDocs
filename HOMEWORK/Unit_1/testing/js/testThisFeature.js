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
        if (num % i === 0) factorCount++
        if (factorCount > 2) break
    }
    return factorCount === 2
}

module.exports = isPrime