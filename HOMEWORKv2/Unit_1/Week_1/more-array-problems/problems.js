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
  return array.map(num => num % 2 === 0 ? 'even' : 'odd')
}
// test
console.log(oddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8]));



// ? write a function that takes an array of words as an argument and returns only words starting with an uppercase 'B'.
// ? eg: beginsWithB(['Bell', 'Ball']) => ['Bell', 'Ball']; beginsWithB(['Bell', 'sandwich']) => ['Bell'];


function beginsWithB(array) {
  return array.filter(word => word[0] === 'B');
}
// test
console.log(beginsWithB(['Ballz', 'Basil', 'apple', 'Giraffe', 'Go Piss girl']));

// ? write a function that multiplies each number in an array by 10 and returns the values in a new array. Make any negative numbers positive.
// ? eg: multiplyBy10([10, 3]) => [100, 30]; multiplyBy10([-2, 0, 10]) => [20, 0, 100];

function multiplyBy10(array) {
  return array.map(num => Math.abs(num) * 10);
}
// test
console.log(multiplyBy10([6.9, 42, -3]));


// ? write a function that takes a value and an array and returns the index of the given value in the array. If the value is not in the array it should return 'Not Found'.
// ? eg: findIndex(1, [10, 3, 1]) => 2; findIndex('George', ['Mike', 'Rane', 'Alex']) => 'Not Found';

function findIndex(val, array) {
  const index = array.indexOf(val);
  return index !== -1 ? index : 'Not Found';
}
// test
console.log(findIndex(69, [10, 55, 69]));

// ? write a function that checks whether ANY of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy5([8, 12, 15]) => true; divisibleBy5([11, 9, 34]) => false;
function divisibleBy5(array) {
 return array.some(num => num % 5 === 0);
}
// test
console.log(divisibleBy5([579345, 12, 15]));

// ? write a function that checks whether ALL of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy10([10, 20, 30]) => true; divisibleBy10([10, 20, 99]) => false;
function divisibleBy10(array) {
  return array.every(num => num % 5 === 0);
}
// test
console.log(divisibleBy10([10, 69, 420]));


// ? write a function that returns the sum of all numerical values in an array. It should be able to handle number and string datatypes.
// ? eg: sumOfArray([1, 2, 3]) => 6; sumOfArray([1, '2', '3']) => 6;
  function sumOfArray(array) {
    return array.reduce((acc, val) => acc + (typeof val === 'string' ? parseInt(val) : val), 0);
}// test
console.log(sumOfArray([20, '13', '36']));

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