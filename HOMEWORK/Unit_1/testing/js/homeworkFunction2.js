// Create a function that receives a X number. Expected output is to present an array with prime numbers from 0 to X.
// (For instance, if X=15, array must be 2, 3, 5, 7, 11, 13)
// Also create a test for this function.


function gimmeArrPrimes(num) {
    const primeArr = [];

    for(let i = 2; i <= num; i++){
        let prime = true

        for(let count = 2; count <= Math.sqrt(i); count++){
            if (i % count === 0){
                prime = false
                break
            }
        }

    if(prime) {
        primeArr.push(i)
    }

    }

    console.log(primeArr)
    return primeArr;
}

gimmeArrPrimes(15);

module.exports = gimmeArrPrimes

