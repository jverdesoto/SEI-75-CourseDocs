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

test('Create an array with 4 primes', () => {
    const result = getAllPrimeNumbers(4);
    expect(getAllPrimeNumbers([3, 5 ,7, 11])).toBe(true)
})


// test files will work differently and wont work in a browser for example

// create one testing file per Javascript file 

// 1. Why do we test our code?
// Any sufficiently complex program is virtually guaranteed to have bugs. As software developers, a large portion of our time will be devoted to identifying, fixing, and preventing these bugs.

// We’ve already had some practice with manually searching code for bugs. But what if we could write programs that automated this verification for us? By investing a small amount of time now to write these test programs, we could save time later by not repeating these verifications manually.

// 2. What is software testing?
// Software testing is the practice of verifying that the code we write does what we expect.

// There are many different types of tests, which can be categorized depending on their purpose.

// Here are a few of the many different ways we classify tests:

// Automatic vs. Manual:

// Manual: A test that is performed by a human
// Automatic: A test that is performed by a computer program
// Unit vs. Integration vs. System

// Unit: A test that verifies a small isolated piece of code
// Integration: A test that verifies that isolated pieces of code work in combination
// System: A test that verifies all of the code in our application at once
// Software testing is a broad field of related technologies and techniques. In this course we will only be focusing on one specific type of testing: Automated Unit Testing.

// What is a Unit Test??
// An Automated Unit Test is a small program that verifies if a small, isolated piece of code does what we expect it to do.

// Typically, a developer will write their own unit tests for any code they develop. Also, unit tests are usually written in the same programming language as the code they test.

// How do we implement a Unit Test?
// In practice, a unit test is made up of an assertion (a statement of truth), and a call to the code we are testing that allows us to check if the assertion is true.

// Let’s start by looking at this function:

// // given a number, determine if that number is even
// function isEven(num) {
//   return num % 2 == 0;
// }
// Intuitively, we understand that this function should evaluate whether or not a number is even, but how do we verify that the code does that?

// Let’s start by writing down our assertions:

// If we call this function with an even number, we expect the function will return true
// If we call this function with an odd number, we expect the function will return false
// Let’s see what these expectations look like expressed as code using the testing framework Jest:

// test("It should return true when called with an even number", () => {
//   expect(isEven(2)).toBe(true);
// });
// Notice how similar the code is to the English language assertions we wrote earlier. Most JavaScript testing frameworks attempt to be as similar to natural language as possible.

// In this test, we make calls to three functions that are part of the Jest library. Let’s investigate them now:

// test()
// This function takes two required arguments:
// The name of the test (this is how we will see the output of the test in our console)
// An anonymous arrow function where we perform the test
// expect()
// The expect function takes one argument:
// The value that your code produces.
// For our Unit Tests, this will always be a call to the function we are testing with specific arguments
// toBe()
// The toBe() function takes one argument:
// The value that we expect should be returned by the code inside our expect() function
// Methods like ‘toBe’, ‘not’, and others like ‘toBeTruthy’ are what we call matchers in the jest library. There are many built in jest matchers and alternative third party libraries that provide additional matchers if you choose to use them. You should familiarize yourself with some of the options you have for writing assertions in jest by reviewing the jest documentation on using jest matchers.

// (optional) Jest and ESM and cjs modules
// This is a brief aside for future note. Jest doesn’t support something called ESM out of the box. ESM means ECMA-script modules. This is a special module syntax used in many javascript frameworks. We typically use a syntax called common javascript modules or CJS. You may run into situations where jest fails to import code you wish to test because that code was built inside of a module format that jest isn’t aware of. There are multiple ways to correct for this. The most common correction would involve utilizing an interpreter like babel and included some of the jest bable libraries such as @babel/plugin-transform-modules-commonjs and babel-jest. You may run into this if you are writing tests for frameworks that use ESM such as react or if a project your working in chooses to use ESM and jest tests.

// Read up on the jest’s teams current state of supporitng ESM modules here.

// Read up more on ESM vs cjs modules as well as some other alternative modules paradigms here

// Running tests and evaluating the results
// Once Jest is installed (either globally on your machine, or as a project dependency), you can run your tests by calling jest in your terminal. By default, the jest command will search your project for any files with the suffix .test.js, and run them.

// Assuming that we have implemented our isEven() function correctly, we should see this output in our terminal when we run our test: