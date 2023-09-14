const firstXPrimeNumbers = require('../js/firstXPrimeNumbers');

test('Test the output of prime numbers Array', () => {
    expect(firstXPrimeNumbers(100)).toEqual[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
})