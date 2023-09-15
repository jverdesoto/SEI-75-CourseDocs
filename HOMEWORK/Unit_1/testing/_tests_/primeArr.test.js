const { primeNumbersUpToX } = require('../primeArr.js'); // Replace with your file name

test('Prime numbers up to 15', () => {
  expect(primeNumbersUpToX(15)).toEqual([2, 3, 5, 7, 11, 13]);
});