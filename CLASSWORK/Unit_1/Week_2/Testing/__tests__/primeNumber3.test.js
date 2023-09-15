const generatePrimesUpTo = require ('../js/primeNumber3')

test('The value of every prime number up to 50', () => {
    const expected = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
    expect(generatePrimesUpTo(50)).toEqual(expected);
})