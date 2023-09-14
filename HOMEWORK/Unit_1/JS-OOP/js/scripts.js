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

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     sayHello() {
//         console.log(`Hello ${this.firstName} ${this.lastName}!`)
//     }
// }

// class Employee extends Person {
//     constructor(firstName, lastName, company, wage) {
//         super(firstName, lastName)
//         this.company = company
//         this.wage = wage
//         this.active = true
//     }
//     receiveRaise(multiple) {
//         this.wage *= multiple
//         console.log(`${this.firstName} ${this.lastName}'s new wage is ${this.wage}`);
//     }
//     terminate() {
//         this.active = false
//         console.log(`${this.firstName} ${this.lastName}'s contract has been terminated. Their active status is ${this.active}`)
//     }
// }

// class Manager extends Employee {
//     constructor(firstName, lastName, company, wage, department) {
//         super(firstName, lastName, company, wage)
//         this.department = department
//     }
//     giveRaise(employee, multiple) {
//         employee.receiveRaise(multiple)
//     }
// }

// class Worker extends Employee {
//     constructor(firstName, lastName, company, wage, manager) {
//         super(firstName, lastName, company, wage)
//         this.manager = manager
//     }
//     whoDoYouReportTo() {
//         console.log(`${this.firstName} ${this.lastName} reports to ${this.manager.firstName} ${this.manager.lastName}.`);
//     }
// }

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     sayHello() {
//         console.log(`Hello ${this.firstName} ${this.lastName}!`)
//     }
// }

// class Employee {
//     constructor(company, wage) {
//         this.company = company
//         this.wage = wage
//         this.active = true
//     }
//     receiveRaise(multiple) {
//         this.wage *= multiple
//         console.log(`${} ${}'s new wage is ${this.wage}`);
//     }
//     terminate() {
//         this.active = false
//         console.log(`${this.firstName} ${this.lastName}'s contract has been terminated. Their active status is ${this.active}`)
//     }
// }

// class Manager {
//     constructor(department) {
//         this.department = department
//     }
//     giveRaise(name, multiple) {
//         name.employee.receiveRaise(multiple)
//     }
// }

// class Worker {
//     constructor(manager) {
//         this.manager = manager
//     }
//     whoDoYouReportTo() {
//         console.log(`${this.firstName} ${this.lastName} reports to ${this.manager.firstName} ${this.manager.lastName}.`);
//     }
// }

// const mary = { 
//     person: new Person('Mary', 'Shelley'),
//     employee: new Employee('Netflix', 10000),
//     manager: new Manager('films')
// }

// const patrick = {
//     person: new Person('Patrick', 'Bateman'),
//     employee: new Employee('American Psycho', 7000),
//     manager: new Worker(mary)    
// }

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    sayHello() {
        console.log(`Hello ${this.firstName} ${this.lastName}!`)
    }
}

class Employee {
    constructor(person, company, wage) {
        this.person = person
        this.company = company
        this.wage = wage
        this.active = true
    }
    receiveRaise(multiple) {
        this.wage *= multiple
        console.log(`${this.person.firstName} ${this.person.lastName}'s new wage is ${this.wage}`);
    }
    terminate() {
        this.active = false
        console.log(`${this.firstName} ${this.lastName}'s contract has been terminated. Their active status is ${this.active}`)
    }
    sayHelloAgain() {
        console.log(`Hello ${this.person.firstName} ${this.person.lastName}!`)
    }
}

class Manager {
    constructor(person, employee, department) {
        this.person = person
        this.employee = employee
        this.department = department
    }
    giveRaise(name, multiple) {
        name.employee.receiveRaise(multiple)
    }
}

class Worker {
    constructor(person, employee, manager) {
        this.person = person
        this.employee = employee
        this.manager = manager
    }
    whoDoYouReportTo() {
        console.log(`${this.person.firstName} ${this.person.lastName} reports to ${this.manager.person.firstName} ${this.manager.person.lastName}.`);
    }
}

const teddyPerson = new Person('Teddy', 'Tasker')
const teddyEmployee = new Employee(teddyPerson, 'Netflix', 15000)
const teddy = new Manager(teddyPerson, teddyEmployee, 'films')

const kasperPerson = new Person('Kasper', 'Howard')
const kasperEmployee = new Employee(kasperPerson, 'Netflix', 100000)
const kasper = new Worker(kasperPerson, kasperEmployee, teddy)
