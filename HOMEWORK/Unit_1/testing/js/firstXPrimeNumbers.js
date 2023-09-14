function isPrime(num) {
    //No need for explanation, as I was lazy and copied and pasted the function
    //from the first exercise.
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

function firstXPrimeNumbers(input) {
    // Defining an empty array that will be updated with prime numbers
    const primesArr = []; 
    //Declaring the starting point outside the function as I wasn't sure whether
    //I could do it inside the while loop or not.
    let i = 2

    while (primesArr[-1] < input) {
        //If the return of isPrime function is true, then the array will be updated
        //with the number used to return the true boolean.
        if (isPrime(i)) {
            primesArr.push(i)
        }
        i++;
    }
    return primesArr
}

//Exporting the function for the testing
module.exports = firstXPrimeNumbers;