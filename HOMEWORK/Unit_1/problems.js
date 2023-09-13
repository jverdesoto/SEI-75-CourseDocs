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
  
  function oddsAndEvensArray(numbers) {
    return numbers.map(function(number) {
      return number % 2 === 0 ? 'even' : 'odd';
    });
  }
  
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const resultArray = oddsAndEvensArray(inputArray);
  
  console.log(resultArray); // Outputs: ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']
  
  
  
  
  // ? write a function that takes an array of words as an argument and returns only words starting with an uppercase 'B'.
  // ? eg: beginsWithB(['Bell', 'Ball']) => ['Bell', 'Ball']; beginsWithB(['Bell', 'sandwich']) => ['Bell'];
  
  
  function beginsWithB(words) {
    return words.filter(function(word) {
      return word.charAt(0) === 'B';
    });
  }
  
  const wordArray1 = ['Bell', 'Ball'];
  const wordArray2 = ['Bell', 'sandwich'];
  
  console.log(beginsWithB(wordArray1)); 
  console.log(beginsWithB(wordArray2)); 
  
  
  // ? write a function that multiplies each number in an array by 10 and returns the values in a new array. Make any negative numbers positive.
  // ? eg: multiplyBy10([10, 3]) => [100, 30]; multiplyBy10([-2, 0, 10]) => [20, 0, 100];
  
  function multiplyBy10(array) {
  
  }
  
  
  // ? write a function that takes a value and an array and returns the index of the given value in the array. If the value is not in the array it should return 'Not Found'.
  // ? eg: findIndex(1, [10, 3, 1]) => 2; findIndex('George', ['Mike', 'Rane', 'Alex']) => 'Not Found';
  
  function findIndex(val, array) {
    const index = array.indexOf(val);
    
    if (index !== -1) {
      return index;
    } else {
      return 'Not Found';
    }
  }
  
  // Test cases
  console.log(findIndex(1, [10, 3, 1]));                    // Output: 2
  console.log(findIndex('George', ['Mike', 'Rane', 'Alex'])); // Output: 'Not Found'
  
  // ? write a function that checks whether ANY of the numbers in the array are can be divided by 5. It should return true or false.
  // ? eg: divisibleBy5([8, 12, 15]) => true; divisibleBy5([11, 9, 34]) => false;
  
  function divisibleBy5(array) {
    return array.some((number) => number % 5 === 0);
  }
  
  // Test cases
  console.log(divisibleBy5([8, 12, 15]));  // Output: true
  console.log(divisibleBy5([11, 9, 34]));  // Output: false
  
  // ? write a function that checks whether ALL of the numbers in the array are can be divided by 5. It should return true or false.
  // ? eg: divisibleBy10([10, 20, 30]) => true; divisibleBy10([10, 20, 99]) => false;
  function divisibleBy10(array) {
  
  }
  
  // ? write a function that returns the sum of all numerical values in an array. It should be able to handle number and string datatypes.
  // ? eg: sumOfArray([1, 2, 3]) => 6; sumOfArray([1, '2', '3']) => 6;
  function sumOfArray(array) {
  
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
  