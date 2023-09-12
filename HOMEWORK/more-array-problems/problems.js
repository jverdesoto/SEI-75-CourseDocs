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
  const resultArr = []
  for (let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      resultArr.push('even')
    }
    else{
      resultArr.push('odd')
    }
  }
  return resultArr
}


// ? write a function that takes an array of words as an argument and returns only words starting with an uppercase 'B'.
// ? eg: beginsWithB(['Bell', 'Ball']) => ['Bell', 'Ball']; beginsWithB(['Bell', 'sandwich']) => ['Bell'];


function beginsWithB(array) {
  const arrayOfB = []
  for (let i = 0; i < array.length; i++){
    if(array[i].charAt(0) === "B"){
      arrayOfB.push(array[i])
    }
  }
  return arrayOfB
}


// ? write a function that multiplies each number in an array by 10 and returns the values in a new array. Make any negative numbers positive.
// ? eg: multiplyBy10([10, 3]) => [100, 30]; multiplyBy10([-2, 0, 10]) => [20, 0, 100];

function multiplyBy10(array) {
  const finalArr = []
  for (let i = 0; i < array.length; i++){
    if (array[i] >= 0){
      finalArr.push(array[i]*10)
    }
    else if (array[i] < 0){
      finalArr.push(Math.abs(array[i])*10)
    }
  }
  return finalArr
}


// ? write a function that takes a value and an array and returns the index of the given value in the array. If the value is not in the array it should return 'Not Found'.
// ? eg: findIndex(1, [10, 3, 1]) => 2; findIndex('George', ['Mike', 'Rane', 'Alex']) => 'Not Found';

function findIndex(val, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return array.indexOf(array[i]);
    }
  }
  return "Not Found";
  // for (let i = 0; i < array.length; i++){
  //   if (array[i] === val) {
  //     return array.indexOf(array[i]);
  //   }
  //   return "Not Found"
  // }
  }


// ? write a function that checks whether ANY of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy5([8, 12, 15]) => true; divisibleBy5([11, 9, 34]) => false;
function divisibleBy5(array) {
  return array.some( num => num % 5 === 0)
}

// ? write a function that checks whether ALL of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy10([10, 20, 30]) => true; divisibleBy10([10, 20, 99]) => false;
function divisibleBy10(array) {
  return array.every(item => item % 10 === 0)
  //or
  // for (let i = 0; i < array.length; i++){
  //     if (array[i] % 10 !== 0){
  //       return false
  //     }
  //   }
  //   return true
}

// ? write a function that returns the sum of all numerical values in an array. It should be able to handle number and string datatypes.
// ? eg: sumOfArray([1, 2, 3]) => 6; sumOfArray([1, '2', '3']) => 6;
function sumOfArray(array) {
    const arrOfNums = []
    for (let i = 0; i < array.length; i++){
      if (typeof array[i] === "number"){
        arrOfNums.push(array[i])
      }
      else if (typeof array[i] === "string")
        arrOfNums.push(parseInt(array[i]))
    }
  
    let total = 0;
    arrOfNums.forEach(item => {
      total += item
    })
    return total
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
