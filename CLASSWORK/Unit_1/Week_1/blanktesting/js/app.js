function sum(num) {
    return num + num
}


function double(arr) {
    const newArr=[]
    for (let i=0; i<arr.length; i++) {
        newArr.push(sum(arr[i]))
    }
    return newArr
} 

function doublemap(arr) {
    const newArr =[]
    console.log(newArr)
    arr.map(function (eachNum) {
        newArr.push(sum(eachNum))
        console.log(newArr)
        console.log(sum(eachNum))
    })
    return newArr
}

