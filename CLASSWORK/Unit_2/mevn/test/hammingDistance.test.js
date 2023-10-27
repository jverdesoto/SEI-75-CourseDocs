// Import the function
const hammingDistance = require('../codeChallenges/hammingDistance');

// Test case
test('Calculates the correct Hamming distance', () => {
  expect(hammingDistance('101010', '100110')).toBe(2);
  expect(hammingDistance('abcde', 'edcba')).toBe(5);
  expect(hammingDistance('hello', 'world')).toBe(4);
});