myFunction()

function myFunction() {
    console.log("Hello");
}

var myVar = 0
let myLet = 0


const mySecondFunction = function () {
    var myVar = 10
    let myLet = 10
    console.log("Hello from my second Function");
}

const myArrowFunction = () => {
    var myVar = 50
    let myLet = 25
    mySecondFunction()
    console.log("Hello from my Arrow Function");
}

myArrowFunction()

function withParams(name) {
    return `Hello ${name}`
}

console.log(withParams('Ivan'))

function addsTwoNumbers(numberOne, numberTwo) {
    return `The result of adding ${numberOne} and ${numberTwo} is ${numberOne + numberTwo}`
    // return 'The result of adding ' + numberOne + ' and ' + numberTwo + ' is ' + (numberOne + numberTwo)
}

console.log(addsTwoNumbers(15,85));

const sayHello = (name, surname) => {
    return `Hello, ${name} ${surname}, Good afternoon!`
}

console.log(sayHello('Elliot', 'Lewis'));

// Write a function named hasWater
// Function will input a string (Name of a planet in our solar system)
// Return a Boolean
// Console log the result

function hasWater(planet) {
    // if(planet === 'Earth')
    //     return true
    // return false

    return planet === 'Earth' ? true : false
}

console.log(hasWater('Earth'));