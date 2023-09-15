const gimmeXPrimes = require('../js/homeworkFunction1')

test('are all the numbers prime', () =>{
    expect(gimmeXPrimes(4)).toEqual([ 2, 3, 5, 7 ])
    expect(gimmeXPrimes(0)).toEqual([])
    expect(gimmeXPrimes(1)).toEqual([2])
    expect(gimmeXPrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
    expect(gimmeXPrimes(-1)).toEqual([])
})

test('correct length of array', () =>{
    const num = 4
    const result = gimmeXPrimes(num)
    expect(result.length).toBe(num)
})