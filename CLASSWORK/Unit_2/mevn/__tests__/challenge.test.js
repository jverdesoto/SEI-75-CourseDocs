const { hammingDistance, fromPairs, reduceArray } = require("../challenge");

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

const reduceTestArrays = [
  [
    [1, 2, 3],
    function (acc, n) {
      return acc + n;
    },
    0,
  ],
  [
    [1, 2, 3],
    function (acc, n, i) {
      return acc + n + i;
    },
    0,
  ],
  [
    ["Yes", "No", "Yes", "Maybe"],
    function (acc, v) {
      acc[v] = acc[v] ? acc[v] + 1 : 1;
      return acc;
    },
    {},
  ],
];

test("Test if reduceArray performs reduce()", () => {
  expect(
    reduceArray(
      reduceTestArrays[0][0],
      reduceTestArrays[0][1],
      reduceTestArrays[0][2]
    )
  ).toEqual(6);
  expect(
    reduceArray(
      reduceTestArrays[1][0],
      reduceTestArrays[1][1],
      reduceTestArrays[1][2]
    )
  ).toEqual(9);
  expect(
    reduceArray(
      reduceTestArrays[2][0],
      reduceTestArrays[2][1],
      reduceTestArrays[2][2]
    )
  ).toEqual({ Yes: 2, No: 1, Maybe: 1 });
});
