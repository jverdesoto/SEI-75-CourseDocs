const primeArray = require('../js/nowTestThisOne')

test('Should return <num> prime numbers', () => {
    expect(primeArray(1)).toEqual([2])
    expect(primeArray(0)).toEqual([])
    expect(primeArray(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
    expect(primeArray(40)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173])
  })