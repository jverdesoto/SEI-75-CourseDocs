const isEven = require('../js/testThisFeature')

test('Test if a number is even',() => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
})