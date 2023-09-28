const fromPairs = require('../fromPairs.js')

test('Test if a string is a From Pairs', () => {
    expect(fromPairs([ ['a', 1], ['b', 2], ['c', 3] ])).toEqual('{a: 1, b: 2, c: 3}')
    expect(fromPairs([ ['name', 'Sam'], ['age', 24], ['name', 'Sally'] ])).toEqual('{name: "Sally", age: 24}')
})