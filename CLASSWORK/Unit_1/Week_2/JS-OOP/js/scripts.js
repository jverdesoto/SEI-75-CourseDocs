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

function Ship() {
    this.floats = true
    this.material = "steel"
    this.whatAmI = function () {
        console.log(`I am made of ${this.material}`)
    }
}
const myShip = new Ship()

// console.log(myShip.floats);

// const myMaterial = myShip.material
// console.log(myMaterial);

// myShip.whatAmI()

// const myObj = {}

// console.log(myObj)

// const myArr = new Array() // Declaring a new array

// const myString = 'hello'

// console.log(myString.__proto__);

// function Car(topSpeed, model, manufacturer, color) {
//     const obj = {}
//     obj.topSpeed = topSpeed
//     obj.model = model
//     obj.manufacturer = manufacturer
//     obj.color = color
//     return obj
// }

// function Car(topSpeed, model, manufacturer, color) {
//     this.topSpeed = topSpeed
//     this.model = model
//     this.manufacturer = manufacturer
//     this.color = color
// }

// class Car {
//     can only have one constructor inside of a class
//     this is the method that recieves the parameters
//     constructor(topSpeed, model, manufacturer, color) {
//         this.topSpeed = topSpeed
//         this.model = model
//         this.manufacturer = manufacturer
//         this.color = color
//     }
//     whatColorAmI() {
//         console.log(`I am ${this.color}`)
//     }
// }

// const myCar = new Car(200, 'M3', 'BMW', 'green')
// const myCar2 = new Car(130, 'Polo', 'VW', 'black')

// console.log(myCar.manufacturer);
// console.log(myCar2.manufacturer);

// myCar.whatColorAmI()
// myCar2.whatColorAmI()


// class Person {
//     constructor(firstName, lastName, company, wage, active, department, manager) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.company = company
//         this.wage = wage
//         this.active = active
//         this.department = department
//         this.manager = manager
//     }
//     saysHello() {
//         console.log(`Hello ${this.firstName} ${this.lastName}`)
//     }
//     recieveRaise() {

//     }
//     terminate() {
//         this.active = false
//     }
//     giveRaise() {

//     }


// }

// const myPerson = new Person('Jeeivan', 'Sri')
// const myEmployee = new Person(firstName, lastName, company, wage, active)
// const myManager = new Person(firstName, lastName, company, wage, active, department)
// const myWorker = new Person(firstName, lastName, company, wage, active, department, manager)



class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    saysHello() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

class Employee extends Person {
    constructor(firstName, lastName, company, wage, active) {
        super(firstName, lastName)
        this.company = company
        this.wage = wage
        this.active = active
    }
    receiveRaise(Amount) {
        this.wage += Amount;
        console.log(Employee.wage)
        }
    terminate() {
        this.active = false;
        }
}

class Manager extends Employee{
    constructor(firstName, lastName, company, wage, active, department) {
        super(firstName, lastName, company, wage, active)
        this.department = department
    }
    giveRaise(raiseAmount) {
        Employee.receiveRaise(raiseAmount)
    }
}

class Worker extends Employee{
    constructor(firstName, lastName, company, wage, active, manager) {
        super(firstName, lastName, company, wage, active)
        this.manager = manager
    }
}

const myPerson = new Person('Jeeivan', 'Sri')
myPerson.saysHello()

const myPerson2 = new Employee('Elliot', 'Lewis')
myPerson2.saysHello()

