const primesToN = require("../js/primesToN");

test("it should return an array of prime numbers up to an including n", () => {
  expect(primesToN(1)).toEqual([]);
  expect(primesToN(2)).toEqual([2]);
  expect(primesToN(7)).toEqual([2, 3, 5, 7]);
  expect(primesToN(18)).toEqual([2, 3, 5, 7, 11, 13, 17]);
  expect(primesToN(-1)).toBe("Error: num must be +");
});
