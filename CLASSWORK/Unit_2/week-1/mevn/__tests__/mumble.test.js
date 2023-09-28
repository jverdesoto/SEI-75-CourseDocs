const { mumble } = require("../mumble")

const testingStrings = [
    {str: 'abc', expected: 'a-bb-ccc'},
    {str: 'X', expected: 'X'},
    {str: '121', expected: '1-22-111'},
    {str: '!A 2', expected: '!-AA-   -2222'},
]

testingStrings.forEach((testScenario, index) => {
    test(`Testing the scenario number ${index + 1}: `, () => {
        expect(mumble(testScenario.str)).toBe(testScenario.expected)
    })
})