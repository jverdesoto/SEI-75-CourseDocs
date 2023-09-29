function mumble(string) {
    //break down the string into an array so we can iterate over it
    const arr = string.split('')

    //initialize a variable that will hold the new array
    const newArr = []

    //use .map so we can loop through the array and return something
    arr.map((element, index) => {
        let count = 0
        while (count <= index) { //compare the count to the index of the element, which should repeat the push
            newArr.push(element)
            count++
        }
        newArr.push('-')
    })

    newArr.pop() //take the extra thingy that was at the end
    const newString = newArr.join('')
    return newString
}