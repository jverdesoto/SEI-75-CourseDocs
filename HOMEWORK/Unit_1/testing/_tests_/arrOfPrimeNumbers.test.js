const generateFirstXPrimes = require('../js/arrOfPrimeNumbers.js')

test('Test if a number is prime', () => {
       expect(generateFirstXPrimes(2)).toBe(true)
})