//function to return booelean if is or isnt a prime number

function test_prime(n)
{

  if (n===1){
    return false;
  }
  else if(n === 2){
    return true;
  }else {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0){
        return false;
      }
    }return true;  
  }
}


function startPrimeNums(n){

    // program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


}


module.exports = startPrimeNums;
module.exports = test_prime;



// first function output an array of first x amount of prime numbers
// second functions will out array oh x amount prime numbers between y & z