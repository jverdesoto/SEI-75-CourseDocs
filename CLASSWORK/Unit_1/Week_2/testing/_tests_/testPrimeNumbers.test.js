const isPrime= require('../js/testingPrimeNumbers')

test('Test if a given number is a prime number', () => {
    expect(isPrime(11)).toBe(true)
})


const startPrimeNums = require('../js/testingPrimeNumbers')

test('Test if x number of prime numbers a returned', () => {
    expect(startPrimeNums(10)).toEqual([
        '2',
        '3',
        '5',
        '7'
    ])
})
