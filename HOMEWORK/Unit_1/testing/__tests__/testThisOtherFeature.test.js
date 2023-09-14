const primeArray = require('../js/testThisOtherFeature')

test('Should return prime numbers up to num', () => {
    expect(primeArray(65)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61])
    expect(primeArray(0)).toEqual([])
    expect(primeArray(10)).toEqual([2, 3, 5, 7])
    expect(primeArray(40)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37])
  })