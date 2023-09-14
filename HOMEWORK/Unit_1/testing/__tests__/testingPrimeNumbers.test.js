const isPrime = require('../js/testingPrimeNumbers');

test('Test if a number is prime', () => {
    expect(isPrime(27)).toBe(false)
})