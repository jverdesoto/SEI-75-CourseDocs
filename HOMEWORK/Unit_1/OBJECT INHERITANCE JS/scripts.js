// Object-oriented Javascript
/*
    - OOP: Using OBJECTS to represent real world things.
    - Objects have own properties and functions (methods)
    - Objects contain data and methods to represent info about what you're trying to model
    ex: 
    function Ship() {
        this.floats = true
        this.material = "steel"
    }

    - Data is encapsulated, conained within the scope
    - In classic OOP, a class is defined, then when an instance of is created, all the properties are *copied* over from the constructor to the instance
    ex as a class: 
    function Ship() {
        this.floats = true
        this.material = "steel"
        this.whatAmI = function () {
            console.log(`I am made of ${this.material}`)
        }
    }
    const myShip = new Ship()
    myShip.whatAmI()

    - JavaScript is dynamic and does not provide a traditional class implementation
    - Javascript inheritance is prototype based
    - Each Object has a private property called Prototype
    - The Prototype can have a Protoype of its own (walking up the chain)
    ex: 
    const myObj {
        a: 1,
        b: 2
    }
    console.log(myObj.a)
    // Does myObj have a key of a ?
    // Yes
    consloe.log(myObj.valueOf())
    // Does myObj have a method valueOf() ?
    // No
    // Does Object have a method valueOf() ?
    // Yes

    const myString = 'hello'
    console.log(mystring.charAt(0))
    console.log(mystring.vlaueOf())
    - Nearly of all objects in JS are instances of Object which seats on top of the Protitype chain
*/

// const myString = 'hello'

// const myObj ={}


// console.log(myString.valueOf());

// function Ship() {
//     this.floats = true
//     this.material = "steel"
//     this.whatAmI = function () {
//         console.log(`I am made of ${this.material}`)
//     }
//     }

//     const myShip = new Ship()

//     // this declares a new object using the data object array
//     const myArr = new Array()


//     // I can created a new instance of the object I created using the key word new

//     myShip.whatAmI()



// these are similar methods to do the same thing - create a class / object
// function Car(topSpeed, model, manufacturer, color) {
//     const obj = {}
//     obj.topSpeed = topSpeed;
//     obj.model = model;
//     obj.manufacturer = manufacturer;
//     obj.color = color;
//     return obj
// }

// // these are similar methods to do the same thing - create a class / object
// function Car(topSpeed, model, manufacturer, color) {
//     this.topSpeed = topSpeed
//     this.model = model
//     this.manufacturer = manufacturer
//     this.color = color
//     // this will be default return the obj created 
//     // you don't need to use return
// }

// // these are similar methods to do the same thing - create a class / object
// class Car {
//     constructor(topSpeed, model, manufacturer, color){
//         this.topSpeed = topSpeed
//         this.model = model
//         this.manufacturer = manufacturer
//         this.color = color
//     //this method will receive the parameters from the car function
// }
// whatColorAmI() {
//     console.log(`I am ${this.color}`);
// }

// }

// const myCar = new Car(200, 'M3', 'BMW', 'green')
// const myCar2 = new Car(130, 'Polo', 'VW', 'black')

// console.log(myCar.topspeed);
// console.log(myCar2.topspeed)

// myCar.whatColorAmI()
// myCar2.whatColorAmI()

//






//

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    sayHello() {
        return `${this.firstName} ${this.lastName} says hello!`;
    }
}

const person = new Person('Peter', 'Parker')
console.log(person.sayHello())

//


class Employee{
    constructor(person, company, wage) {
        this.company = company
        this.wage = wage
        this.active = true
        this.person = person
    }
    receiveRaise(raiseAmount) {
    this.wage += raiseAmount;
        console.log(Employee.wage)
    }
    terminate() {
        this.active = false;
    }
    say() {
        console.log(this.person.sayHello())
    }
}

const employee = new Employee(person, 'Microsoft', 'High')
Employee1.say()

// how / where do i call receiveRaise on employee?
class Manager {
    constructor(employee, department) {
        this.department = department
    }

    giveRaise(Employee, receiveRaise) {
        if (employee.active)
        this.giveRaise = giveRaise
    }

}

const manager = new Manager('Games + Hardware')

class Worker {
    constructor(manager){
        this.employee = employee
        this.department = department

    }
}

const Worker1 = new Worker('')



// //how do I reference a manager object here?