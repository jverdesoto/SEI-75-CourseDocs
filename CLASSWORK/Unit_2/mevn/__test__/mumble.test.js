const mumble = require('../mumble.js')

test('Test if a string is a mumble', () => {
    expect(mumble('X')).toBe('X')
    expect(mumble('abc')).toBe('a-bb-ccc')
    expect(mumble('121')).toBe('1-22-111')
    expect(mumble('!A 2')).toBe('!-AA-   -2222')
})