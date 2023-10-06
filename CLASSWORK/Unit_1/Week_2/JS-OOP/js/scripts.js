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


// function Car(topSpeed, model, manufacturer, color) {
//     const obj = {
//     }
//     obj.topSpeed = topSpeed
//     obj.model = model
//     obj.manufacturer =manufacturer
//     obj.color = color
//     return obj
// }

// function Car(topSpeed, model, manufacturer, color) {
//     this.model = model
//     this.manufacturer =manufacturer
//     this.topSpeed = topSpeed
//     this.color = color
// }

// class Car {
//     constructor(topSpeed, model, manufacturer, color){
//     this.topSpeed = topSpeed
//     this.model = model
//     this.manufacturer = manufacturer
//    this.color = color
//  }
//         whatColorAmI() {
//         console.log(`I am ${this.color}`);
//     }
// }



//     const myCar = new Car(200, 'M3', 'BMW', 'green')
//     const myCar2 = new Car(130, 'Polo', 'VW', 'black')

//     console.log(myCar.color)
//     console.log(myCar2.color)
    
//     myCar.whatColorAmI()
//     myCar2.whatColorAmI()

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     sayHello() {
//         alert(this.firstName)
//     }
// }
// const myPerson = new Person('Aisha', 'Ayinde')
// myPerson.sayHello()

// Parent class
class Person{ 

constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName

}

    sayHello(){
        console.log("Hello")
    }

}

let person1 = new Person("Aisha", "Ayinde")
let person2 = new Person("Ryan", "Reynolds")

console.log(person1.lastName)

// sub class of person
class Employee extends Person {
    constructor(firstName, lastName, company, wage, active) {
        super(firstName, lastName)
        this.company = company
        this.wage = wage
        this.active = true
        
    }

// recieveRaise() {
//     console.log('Your wage is now ' + this.wage )
// }
// terminate() {}
}
 

// sub class of employee
class Manager extends Employee {
    constructor(firstName, lastName, company, wage, active, department) {
        super(company, wage, active)
        this.department = department
    }

// giveRaise(recieveRaise()) //calls on employee object

}

class Worker extends Employee {
    constructor(firstName, lastName, company, wage, active, manager) {
        super(company, wage, active)
        this.manager = manager
    }
    // workHours()

}

let employee = new Employee('Aisha', 'Ayinde', 'google', '£80,000', 'active')
let manager = new Manager()
let worker = new Worker()

console.log(employee.wage)
console.log(employee.firstName)

//sdf