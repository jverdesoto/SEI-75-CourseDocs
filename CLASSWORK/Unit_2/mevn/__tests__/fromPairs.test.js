const fromPairs = require('../fromPairs')

test('Create object from pairs', () => {
    expect(fromPairs([ ['a', 1], ['b', 2], ['c', 3] ])).toEqual({ a: 1, b: 2, c: 3 })
})

test('Create object from pairs', () => {
    expect(fromPairs([ ['name', 'Sam'], ['age', 24], ['name', 'Sally'] ])).toEqual({ name: 'Sally', age: 24 })
})