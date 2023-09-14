// function myFunction(){
//     console.log('hello')
// }
// myFunction()

// const mySecondFunction = function(){
//     console.log("hello I'm the second function");
// }
// mySecondFunction()

// const myArrowFunction = () => {

//     console.log('Hello from the Arrow function!');
// }
// myArrowFunction()

// function withParams(name){
//     return `Hello ${name}`
// }
// console.log(withParams('Sofia'))

// function addsTwoNumbers(numberOne, numberTwo){
//     return `the result of adding ${numberOne} and ${numberTwo} is ${numberOne+numberTwo}.`
// }
// console.log(addsTwoNumbers(2,2))


var myVar = 1

function tryingVarsAndLets1(num1, num2){
    var myVar = 3   //logs fine
    function(myVar)
    let myLet = 0
    console.log(num1+num2)
}
tryingVarsAndLets1(myVar, 5) 


//picks up the global scope var not the function one??

// const tryingVarsAndLets2 = () => {
//     var myVar = 50   //logs fine
//     let myLet = 25
//     console.log(myVar)
// }
// tryingVarsAndLets2()

// //var is not global, it is function scope



// const hasWater = (planet) => {
//     if (planet === 'Earth'|| planet === "earth"){
//         return true
//     }
//     return false
// }
// console.log(hasWater("Pluto"))

function hasWater2(planet){
    const planetCheck = planet.toLowerCase();
    if (planetCheck === 'earth'){
        return true
    }
    return false
}
console.log(hasWater2('EaRTH'))

//suggestion from 