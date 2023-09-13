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

// function Ship() {
//     this.floats = true
//     this.material = "steel"
//     this.whatAmI = function () {
//         console.log(`I am made of ${this.material}`)
//     }
// }

// const myShip = new Ship()

// myShip.whatAmI()




function Car(topSpeed, model, manufacturer, color) {
    // const obj = {}
    // obj.topSpeed = topSpeed
    // obj.model = model
    // obj.manufacturer = manufacturer
    // obj.color = color
    // return obj


    // the below works exactly the same as the above. The above is what 
    // goes on behind the sceneswhen you do this -->
    this.topSpeed = topSpeed
    this.model = model
    this.manufacturer = manufacturer
    this.coor = color
}
const myCar = new Car(200, 'M3', 'BMW', 'green')
const myCar2 = new Car(130, 'polo', 'VW', 'purple')

console.log(myCar.topSpeed);
console.log(myCar2.topSpeed);



// However there is a more modern way of doing this --->

class Car2 {
    // you can only have 1 constructor in a method
    constructor (topSpeed, model, manufacturer, color) {
        this.topSpeed = topSpeed
        this.model = model
        this.manufacturer = manufacturer
        this.color = color
    }
    // Outside of the constructor you can create the different methods you want. 
    // Important to note that within the class, methods with automatically be identified
    //as a function, so the function element doesn't need to be declared.
    whatColorAmI(){
        console.log(`I am ${this.color}`);
    }
}

const myCar3 = new Car2(200, 'M3', 'BMW', 'green')
const myCar4 = new Car2(130, 'polo', 'VW', 'purple')

console.log(myCar.topSpeed);
console.log(myCar2.topSpeed);

myCar3.whatColorAmI()
myCar4.whatColorAmI()






class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    sayHello() {
        return `Hello my name is${this.firstName} ${this.lastName}`
    }
}

const person = new Person('Matt', 'Burton-Johnson')

class Employee extends Person {
    constructor(firstName, lastName, company, wage) {
        super(firstName, lastName)
        this.company = company
        this.wage = wage
        this.active = true
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, company, wage, department) {
        super(firstName, lastName, company, wage)
        this.department = department
    }
}

class Worker extends Employee {
    constructor(firstName, lastName, company, wage, manager) {
        super(firstName, lastName, company, wage)
        this.manager = manager
    }
}

// function initialize() {
//     const aPerson = new Person(firstName, lastName);
// }