// const isEven = require('../js/testThisFeature')

// test('Test if a number is even', () => {
//     expect(isEven(4)).toBe(true)
// })

// const isLongerThan5 = require('../js/testThisFeature')

// test('Test if a string is longer than 5', () => {
//     expect(isLongerThan5('elephant')).toBe(true)
// })

const isPrime = require('../js/testThisFeature')

test('Check that 4 is not prime', () => {
    expect(isPrime(4)).toBe(false)
})

test('Check that 0 is not prime', () => {
    expect(isPrime(0)).toBe(false)
})

test('Check that 1 is not prime', () => {
    expect(isPrime(1)).toBe(false)
})

test('Check that 61 is prime', () => {
    expect(isPrime(61)).toBe(true)
})

test('Check that 55 is not prime', () => {
    expect(isPrime(55)).toBe(false)
})

test('Check that 5 is prime', () => {
    expect(isPrime(5)).toBe(true)
})