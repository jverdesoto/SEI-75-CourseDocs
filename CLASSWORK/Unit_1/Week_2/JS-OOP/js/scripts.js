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
    - The Prototype stores the property's value
    - Bucket to store properties and methods
    - Prototype as a template

    Constructors:
    function myClass(value1, value2) {
        const obj = {}
        obj.value1 = value1
        obj.value2 = value2
        return obj
    }

    function myClass(value1, value2) {
        this.value1 = value1
        this.value2 = value2
    }

    class myClass {
        constructor(value1, value2) {
            this.value1 = value1
            this.value2 = value2
        }
    }

*/

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
//     constructor(topSpeed, model, manufacturer, color){
//         this.topSpeed = topSpeed
//         this.model = model
//         this.manufacturer = manufacturer
//         this.color = color
//     }
//     whatColorAmI() {
//         return `I am ${this.color}`;
//     }
// }

// const myCar = new Car(200, 'M3', 'BMW', 'green')
// const myCar2 = new Car(130, 'Polo', 'VW', 'black')

// console.log(myCar.topSpeed)
// console.log(myCar2.topSpeed)

// document.getElementById('name').innerHTML = myCar.whatColorAmI()

// console.log(myCar.whatColorAmI())
// console.log(myCar2.whatColorAmI())


class Person {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }
    sayHello() {
        return `Hello my name is ${this.name} ${this.surname}`
    }
}

const person = new Person('Rick', 'Keenan')

console.log(person.sayHello());

class Emplyee {
    constructor(person, company, wage) {
        this.person = person
        this.company = company
        this.wage = wage
        this.active = true
    }
    receiveRaise(amount){
        this.wage = amount
    }
    terminate() {
        this.active = false
    }
}

const employee = new Emplyee(person, 'microsoft', 100000)

console.log(employee.person.name);

employee.receiveRaise(120000)

console.log(employee.wage)
