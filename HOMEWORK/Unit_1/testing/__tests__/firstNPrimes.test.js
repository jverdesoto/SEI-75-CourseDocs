const firstNPrimes = require("../js/firstNPrimes");

test("it should return the first N prime numbers", () => {
  expect(firstNPrimes(1)).toEqual([2]);
  expect(firstNPrimes(2)).toEqual([2, 3]);
  expect(firstNPrimes(5)).toEqual([2, 3, 5, 7, 11]);
  expect(firstNPrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  expect(firstNPrimes(0)).toEqual("Error: num must be +");
});
