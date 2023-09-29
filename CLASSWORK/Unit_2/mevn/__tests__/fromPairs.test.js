const fromPairs = require('../fromPairs'); // adjust your path, sofia, do not get lost 

test('Returns an object with key-value pairs', () => {
  expect(fromPairs([ ['cat', 'Fluffy'], ['dog', 'Rex'], ['bird', 'Tweety'] ])).toEqual({ cat: 'Fluffy', dog: 'Rex', bird: 'Tweety' });
});

test('Overwrites previous keys with new values', () => {
  expect(fromPairs([ ['name', 'Bruce Wayne'], ['job', 'CEO'], ['name', 'Batman'] ])).toEqual({ name: "Batman", job: 'CEO' });
});

test("Empty object!", () => {
  expect(fromPairs([])).toEqual({});
});