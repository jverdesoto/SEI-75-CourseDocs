//Function copied from the first exercise
function isPrime(num) {
    if (num <= 0) {
        return `Invalid input!`
    } else if (num === 1 || num === 2) {
        return true
    } else {
        for(let i = 2; i < num; i++){
            if(num % i === 0) {
                return false
            } 
        }
        return true
    }
}

function listOfPrimeNumbers(input) {
    //Declaring an empty array that will contain the results
    const primesArr = [];
    //Starting point of the while function
    let i = 2;

    //A while loop that is meant to run until the length of our array
    //is smaller than the desired input
    while (primesArr.length < input) {
        //If the function returns a true boolean, the primes array will be updated
        if (isPrime(i)) {
            primesArr.push(i)
        }
        i++;
    }
    return primesArr
}

//Exporting the function for the testing
module.exports = listOfPrimeNumbers;