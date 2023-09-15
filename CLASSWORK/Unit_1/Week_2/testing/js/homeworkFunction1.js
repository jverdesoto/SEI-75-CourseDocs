// Create a function that receives a X number. Expected output is to present an array of X first prime numbers.
// (For instance, if X=4, array must be 2, 3, 5, 7)
// Also create a test for this function (set of results)

function gimmeXPrimes(num) {
    const primeArr = []
    let arrayLength = 0
    let i = 2

    while (arrayLength < num) {
        let prime = true

        for (let count = 2; count <= Math.sqrt(i); count++) {
            if (i % count === 0) {
                prime = false
                break
            }
        }
        if (prime) {
            primeArr.push(i)
            arrayLength++
        }
        i++
    }
    console.log(primeArr)
    return primeArr
}

gimmeXPrimes(4)

module.exports = gimmeXPrimes
//gonna need a loop
//gonna need an empty array
//have a variable that determines the length of the array, to use it in the loop
//could use a while loop until reaching the length I want
//use length to determine when to stop the loop