const getPrimeNumbers = require("../js/testReturnPrimeNumbers");

test("it should return true when the number is prime", () => {
  expect(getPrimeNumbers(15)).toEqual([2, 3, 5, 7, 11, 13]);
});