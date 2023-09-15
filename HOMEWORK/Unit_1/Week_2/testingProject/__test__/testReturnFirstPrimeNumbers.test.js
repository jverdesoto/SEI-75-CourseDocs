const getFirstPrimeNumber = require("../js/testReturnFirstPrimeNumbers");

test("it should return true when the number is prime", () => {
  expect(getFirstPrimeNumber(4)).toEqual([2, 3, 5, 7]);
});