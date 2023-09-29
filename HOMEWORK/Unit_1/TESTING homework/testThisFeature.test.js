// 
// 1. the code below tests for even numbers
// const isEven = require('../js/testThisFeature')

// test('Test if a number is even', () => {
//     expect(isEven(4)).toBe(true)
// })

// 2. the code below tests for primes
// const isPrime = require('../js/testThisFeature')

// test('Test if a number is prime', () => {
//     expect(isPrime(6)).toBe(true)
// })

// homework 1
const getAllPrimeNumbers = require('../js/testThisFeature')

test('Create an array with 4 primes', () => {
    const result = getAllPrimeNumbers(4);
    expect(getAllPrimeNumbers([3, 5 ,7, 11])).toBe(true)
})


// homework 2

const getAllPrimeNumbers = require('../js/testThisFeature')

test('Create an array with X number of primes', () => {
    const result = getXPrimeNumbers();
    expect(getXPrimeNumbers()).toBe()
})
