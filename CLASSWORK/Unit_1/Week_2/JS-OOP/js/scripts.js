// Object-oriented Javascript
/*
    - OOP: Using OBJECTS to represent real world things.
    - Objects hace own properties and functions (methods)
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

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        return `Hello, I am ${this.firstName} ${this.lastName}`;
    }
}

// const firstPerson = new Person('Rick','Keenan')
// console.log(firstPerson.sayHello())


class Employee {
    constructor (person,company, wage){
        this.person = person
        this.company = company
        this.wage = wage
        this.active = true
    }
    receiveRaise (wageIncrease) {
        this.wage += wageIncrease;
    }
    terminate () {
        this.active = false
    }
}


class Manager {
    constructor (employee, department) {
        this.department = department;
        this.employee = employee
    }
        giveRaise (raiseAmount){
            Employee.receiveRaise(raiseAmount)
    }
}



class Worker {
    constructor (manager) {
        this.Manager = manager;
    }
}
