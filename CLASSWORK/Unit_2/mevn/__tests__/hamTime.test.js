const hammingDistance = require('../hamTime')

test('Test hamming distance', () => {
    expect(hammingDistance('abc', 'abc')).toBe(0)
})

test('Test hamming distance', () => {
    expect(hammingDistance('a1c', 'a2c')).toBe(1)
})

test('Test hamming distance', () => {
    expect(hammingDistance('!!!!', '****')).toBe(4)
})

test('Test hamming distance', () => {
    expect(hammingDistance('abc', 'ab')).toBe(NaN)
})

test('Test hamming distance', () => {
    expect(hammingDistance('javascript .filter', 'javascript .falsre')).toBe(4)
})
