const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

function newArr(num) {
    //empty array where the new arry will go
    const primeArr = []
    //go through each itme in the array the same amount of times as
    //num 
    for (let i= 0; i<=num ; i++){
        //each time you go through the array slice and add it to the new array
        primeArr.slice(prime[0,num]).push(primeArr)
    }
    return primeArr;
}

console.log(newArr(3));