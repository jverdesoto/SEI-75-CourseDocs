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

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function oddsAndEvens(array) {
//   let even = [];
//   let odd = [];
//   array.map((eachNumber) => {
//       if (eachNumber % 2 === 0) {
//           even.push(eachNumber);
//       } else {
//           odd.push(eachNumber);
//       }  
//   });
//   return [even, odd];
// }

// console.log(oddsAndEvens(numbers));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function oddsAndEvens(array) {
 let string =[];
 array.toString((eachNumber) => {
    if (eachNumber % 2 === 0) {
        string.push(${'even'});
    } else {
        string.push('odd')
    }
 }); return string;
}

console.log(oddsAndEvens(numbers));

// ? write a function that takes an array of words as an argument and returns only words starting with an uppercase 'B'.
// ? eg: beginsWithB(['Bell', 'Ball']) => ['Bell', 'Ball']; beginsWithB(['Bell', 'sandwich']) => ['Bell'];

const words = ['apple', 'Banana', 'carrot', 'dog', 'elephant', 'flower', 'grapes', 'Bicycle', 'mango', 'lemon'];
function beginsWithB(array) {
  let onlyB = [];
  array.map((eachWord) => {
    if (eachWord.charAt(0) === 'B') {
      onlyB.push(eachWord)
    }
  });
  return onlyB;
}
console.log(beginsWithB(words));


// ? write a function that multiplies each number in an array by 10 and returns the values in a new array. Make any negative numbers positive.
// ? eg: multiplyBy10([10, 3]) => [100, 30]; multiplyBy10([-2, 0, 10]) => [20, 0, 100];


function multiplyBy10(array) {

}


// ? write a function that takes a value and an array and returns the index of the given value in the array. If the value is not in the array it should return 'Not Found'.
// ? eg: findIndex(1, [10, 3, 1]) => 2; findIndex('George', ['Mike', 'Rane', 'Alex']) => 'Not Found';

const moreWords = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange'];

const fruitSalad = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange'];

function findIndex(val, array) {
        array.includes((fruit) =>{
            if (fruit === true) {
                return 'Youre so lucky is already in the salad!'
            }
        });
        return 'no soz we are out of that :('
    }
console.log(findIndex('tomato', fruitSalad))


// ? write a function that checks whether ANY of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy5([8, 12, 15]) => true; divisibleBy5([11, 9, 34]) => false;
const moreNumbers = [37, 22, 84, 95, 60, 13, 42, 76, 51, 68];
function divisibleBy5(array) {
  const divByFive = [];
  array.forEach((eachNum) => {
      if (eachNum % 5 === 0) { 
          divByFive.push(eachNum);
      }
  });
  return divByFive;
}
console.log(divisibleBy5(moreNumbers));

// ? write a function that checks whether ALL of the numbers in the array are can be divided by 5. It should return true or false.
// ? eg: divisibleBy10([10, 20, 30]) => true; divisibleBy10([10, 20, 99]) => false;
function divisibleBy10(array) {
  const divByTen = [];
  array.forEach((eachNum) => {
      if (eachNum % 10 === 0) { 
          divByTen.push(eachNum);
      }
  });
  return divByTen;
}
console.log(divisibleBy10(moreNumbers));


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
