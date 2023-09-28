const { fromPairs } = require("../fromPairs")

const testingPairs = [
    {pairs: [['a', 1], ['b', 2], ['c', 3], ['a', 2]], expected: {a: 2, b: 2, c: 3}},
    {pairs: [['a', 1], ['b', 2], ['c', 3], ['d', 4]], expected: {a: 1, b: 2, c: 3, d: 4}},
    {pairs: [['a', 1], ['b', 2], ['b', 3], ['b', 4]], expected: {a: 1, b: 4}},
    {pairs: [['a', 1], ['b', 2], ['c', 3], ['c', 4]], expected: {a: 1, b: 2, c: 4}},
    {pairs: [['name', 'Sam'], ['age', 24], ['name', 'Sally']], expected: {name: 'Sally', age: 24}}
]

testingPairs.forEach((testScenario, index) => {
    test(`Testing the scenario number ${index + 1}: `, () => {
        expect(fromPairs(testScenario.pairs)).toStrictEqual(testScenario.expected)
    })
})