const isPrimeFunction = require("../js/tesIsPrimeNumber");

test("it should return true when the number is prime", () => {
  expect(isPrimeFunction(23)).toEqual(true);
});