/* eslint-disable no-unused-vars */

// !  To run:   NPM I    ->   NPM T

// * Below is a demo function to practice running the automated tests.
// * add the statement 'return []' to the function, save the file.
// * Run the tests with the command inside your terminal 'npm run test'
// * You should now see this demo test passing in the ouput report
function demo(array) {
  return []
}


// ? using "map" write a function that returns the string 'even' for all even numbers in an array, and 'odd' for odd numbers.
// ? Eg. [1, 2, 3, 4, 5, 6, 7, 8] -> ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']

function oddsAndEvens(array) {
  //Check if each number has a remainder other than 0 when multiplied by 2 - % 2 returns truthy if there is a remainder and falsy if the remainder is 0
  const updatedArr = array.map((number) => (number % 2) ? "odd" : "even")
  return updatedArr
}


// ? write a function that takes an array of words as an argument and returns only words starting with an uppercase 'B'.
// ? eg: beginsWithB(['Bell', 'Ball']) => ['Bell', 'Ball']; beginsWithB(['Bell', 'sandwich']) => ['Bell'];


function beginsWithB(array) {
  const updatedArr = array.filter((word) => word.charAt(0) === "B")
  return updatedArr
}


// ? write a function that multiplies each number in an array by 10 and returns the values in a new array. Make any negative numbers positive.
// ? eg: multiplyBy10([10, 3]) => [100, 30]; multiplyBy10([-2, 0, 10]) => [20, 0, 100];

function multiplyBy10(array) {
  //For each number in the array, check if it is greater than or equal to 0, if so, multiply it by 10. If not, multiply it by -1, then multiply it by 10.
  const updatedArr = array.map((number) => (number >= 0) ? number * 10 : (number * -1) * 10)
  return updatedArr
}


// ? write a function that takes a value and an array and returns the index of the given value in the array. If the value is not in the array it should return 'Not Found'.
// ? eg: findIndex(1, [10, 3, 1]) => 2; findIndex('George', ['Mike', 'Rane', 'Alex']) => 'Not Found';

function findIndex(val, array) {
  // Check whether any numbers in the array are equal to val and return the index
  for (i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i
    }
  }
  return "Not Found"
}


// ? write a function that checks whether ANY of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy5([8, 12, 15]) => true; divisibleBy5([11, 9, 34]) => false;
function divisibleBy5(array) {
  // Divide all numbers by 5 and store the remainders in an array
  const remainderArr = array.map((number) => number % 5)
  
  // Check whether any numbers have the remainder 0
  if (remainderArr.includes(0)) {
    return true
  }
  return false
}

// ? write a function that checks whether ALL of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy10([10, 20, 30]) => true; divisibleBy10([10, 20, 99]) => false;
function divisibleBy10(array) {
  // Divide all numbers by 10 and store the remainders in an array
  const remainderArr = array.map((number) => number % 10)

  // Check whether all remainders are 0
  if (remainderArr.every((number) => number === 0)) {
    return true
  }
  return false
}

// ? write a function that returns the sum of all numerical values in an array. It should be able to handle number and string datatypes.
// ? eg: sumOfArray([1, 2, 3]) => 6; sumOfArray([1, '2', '3']) => 6;
function sumOfArray(array) {
  let sum = 0
  //Change strings to integers
  const updatedArr = array.map((number) => (typeof number === "string") ? parseInt(number) : number)
  //Add numbers and store in sum
  updatedArr.map((number) => sum += number)
  return sum
}

// ! please do not alter below ✋

module.exports = {
  demo,
  oddsAndEvens,
  beginsWithB,
  multiplyBy10,
  findIndex,
  divisibleBy5,
  divisibleBy10,
  sumOfArray,
}
