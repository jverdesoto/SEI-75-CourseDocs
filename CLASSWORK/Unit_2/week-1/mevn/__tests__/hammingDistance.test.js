const { hammingDistance } = require("../hammingDistance")

const testingStrings = [
    {str1: 'abc', str2: 'bbb', expected: 2},
    {str1: 'abc', str2: 'abb', expected: 1},
    {str1: 'abc', str2: 'ccc', expected: 2},
    {str1: 'abc', str2: 'abcc', expected: NaN},
    {str1: 'abc', str2: 'def', expected: 3},
    {str1: 'abc', str2: 'abc', expected: 0},
    {str1: 'abc', str2: 'abce', expected: NaN},
    {str1: 'abcdef', str2: 'abddrf', expected: 2},
    {str1: 'abcdef', str2: 'acbedf', expected: 4},
    {str1: 'abcdef', str2: 'acbedfg', expected: NaN},
    {str1: 'klm', str2: 'kmm', expected: 1}
]

testingStrings.forEach((testScenario, index) => {
    test(`Testing the scenario number ${index + 1}: `, () => {
        expect(hammingDistance(testScenario.str1, testScenario.str2)).toBe(testScenario.expected)
    })
})