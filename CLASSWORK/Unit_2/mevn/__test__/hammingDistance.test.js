
const hammingDistance = require('../hammingDistance.js')

test('Test if a string is a hamming distance', () => {
    expect(hammingDistance('abc', 'abc')).toBe(0)
    expect(hammingDistance('a1c', 'a2c')).toBe(1)
    expect(hammingDistance('!!!!', '****')).toBe(4)
    expect(hammingDistance('abc', 'ab')).toBe('NaN')
})