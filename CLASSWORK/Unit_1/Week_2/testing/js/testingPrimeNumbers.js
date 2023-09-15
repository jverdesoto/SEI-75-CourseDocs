// Function to test whether a number is prime or not

function isPrime(num) {
    //A prime number must be positive
    if (num <= 0) {
        return `Invalid input!`
    //1 and 2 are prime numbers, but they will skip the for loop in order to avoid
    //any undesired results (i.e. - returning true values for every number)
    } else if (num === 1 || num === 2) {
        return true
    } else {
        //This for loop is meant to divide, one by one, every number up to our
        //input in isPrime(num) in order to test the remainder
        for(let i = 2; i < num; i++){
            if(num % i === 0) {
                return false
            } 
        }
        //In case the if statement will not return a false boolean, the for loop
        //is meant to automatically return true.
        return true
    }
}

//Exporting the function for the testing
module.exports = isPrime;