// function isPrime(num) {
//     let factorCount = 0
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) factorCount++
//         if (factorCount > 2) break
//     }
//     return factorCount === 2
// }

function isPrime(num) {
    let factorCount = 0
    let sqrtNum = Math.sqrt(num)
    if (num === 0 || num === 1) return false
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) factorCount++
    }
    return factorCount === 0
}

module.exports = isPrime