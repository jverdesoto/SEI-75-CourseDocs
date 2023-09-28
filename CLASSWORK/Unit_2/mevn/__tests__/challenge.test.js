const { hammingDistance, fromPairs } = require("../challenge");

const hammingTests = [
  ["abc", "abc"],
  ["a1c", "a2c"],
  ["!!!!", "****"],
  ["abc", "ab"],
];

test("Test if hamming output is correct", () => {
  expect(hammingDistance(hammingTests[0][0], hammingTests[0][1])).toEqual(0);
  expect(hammingDistance(hammingTests[1][0], hammingTests[1][1])).toEqual(1);
  expect(hammingDistance(hammingTests[2][0], hammingTests[2][1])).toEqual(4);
  expect(hammingDistance(hammingTests[3][0], hammingTests[3][1])).toEqual(NaN);
});

const pairsTest = [
  [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ],
  [
    ["name", "Sam"],
    ["age", 24],
    ["name", "Sally"],
  ],
];

test("Test if fromPairs() converts array to object", () => {
  expect(fromPairs(pairsTest[0])).toEqual({ a: 1, b: 2, c: 3 });
  expect(fromPairs(pairsTest[1])).toEqual({ name: "Sally", age: 24 });
});
