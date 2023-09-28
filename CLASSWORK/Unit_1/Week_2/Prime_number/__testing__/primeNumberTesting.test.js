const isPrime = require('../js/primeNumberTesting')

test('checks if a number is a prime (true) number or not (false)',() => {
    expect(isPrime(5)).toBe(true)
})