const checkPrime = require("../js/checkPrime");

test("it should return true if number is prime", () => {
  expect(checkPrime(29)).toBeTruthy();
  expect(checkPrime(25)).toBeFalsy();
  expect(checkPrime(9973)).toBeTruthy();
});
