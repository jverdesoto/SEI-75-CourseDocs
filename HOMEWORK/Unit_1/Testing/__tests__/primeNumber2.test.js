const generateFirstXPrimes = require('../js/primeNumber2')

test('The value of the first 6 prime numbers', () => {
    const expected = [2,3,5,7,11,13];
    expect(generateFirstXPrimes(6)).toEqual(expected);
})