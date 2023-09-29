const hammingDistance = require('../hammingDistance');

test('Twinsies! Hamming distance of zero', () => {
  expect(hammingDistance('meow', 'meow')).toBe(0);
});

test('Close but with one change. Makes Hamming distance 1', () => {
  expect(hammingDistance('meow', 'mrow')).toBe(1);
});

test("Aren't alike", () => {
  expect(hammingDistance('meow', 'woof')).toBe(3);
});

test("Mismatched lengths? How dare you!", () => {
  expect(hammingDistance('meow', 'moo')).toBeNaN();
});