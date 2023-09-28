const mumble = require('../mumble')

test('Mumble function', () => {
    expect(mumble('X')).toEqual('X')
})

test('Mumble function', () => {
    expect(mumble('abc')).toEqual('a-bb-ccc')
})

test('Mumble function', () => {
    expect(mumble('121')).toEqual('1-22-111')
})

test('Mumble function', () => {
    expect(mumble('!A 2')).toEqual('!-AA-   -2222')
})