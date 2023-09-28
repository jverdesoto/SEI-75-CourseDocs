const reduceArray = require('../coding-challenges/reduceArray')

test('Test reduce array function', () => {
    expect(reduceArray([1, 2, 3], (acc, n) => acc + n, 0)).toBe(6)
})

test('Test reduce array function', () => {
    expect(reduceArray([1, 2, 3], (acc, n, i) => acc + n + i, 0)).toBe(9)
})

test('Test reduce array function', () => {
    expect(reduceArray(['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
        acc[v] = acc[v] ? acc[v] + 1 : 1;
        return acc;
      }, {})).toEqual({"Yes": 2, "No": 1, "Maybe": 1})
})