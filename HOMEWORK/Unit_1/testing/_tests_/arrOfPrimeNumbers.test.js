const generateFirstXPrimes = require('../js/arrOfPrimeNumbers.js')

test('Test if a number is prime', () => {
       expect(generateFirstXPrimes(5)).toEqual([2,3,5,7,11])
})