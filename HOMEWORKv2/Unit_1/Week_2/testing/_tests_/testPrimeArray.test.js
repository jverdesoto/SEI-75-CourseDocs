const { firstXPrimes, primesUptoX } = require('../js/testPrimeArray');

// test for firstXPrimes function
test('Test prime x', () => {
  expect(firstXPrimes(4)).toStrictEqual([2, 3, 5, 7]);
});

// test for primesUptoX function
test('Test prime upto x', () => {
  expect(primesUptoX(15)).toStrictEqual([2, 3, 5, 7, 11, 13]);
});
