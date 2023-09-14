// Object-oriented Javascript
/*
    - OOP: Using OBJECTS to represent real world things.
    - Objects hace own properties and functions (methids)
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
// *
// function Ship() {
//   this.floats = true
//   this.material = "steel"
//   this.whatAmI = function () {
//     console.log(`I am made of ${this.material}`)
//   }
// }

// const myShip = new Ship()
// console.log(myShip.floats)

// myShip.whatAmI()

// const myString = "hello"

// console.log(myString.__proto__)

// * Class car
// class Car {
//   constructor(topSpeed, model, manufacturer, color) {
//     this.topSpeed = topSpeed
//     this.model = model
//     this.manufacturer = manufacturer
//     this.color = color
//   }
// }

// const myCar = new Car(140, 'Focus', 'Ford', 'black')
// const myCar2 = new Car(150, 'Golf', 'Volkswagen', 'silver')

// console.log(`My ${myCar.manufacturer} ${myCar.model} is ${myCar.color} and has a top speed of ${myCar.topSpeed}mph`)

// console.log(`My ${myCar2.manufacturer} ${myCar2.model} is ${myCar2.color} and has a top speed of ${myCar2.topSpeed}mph`)

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  sayHello() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`)
  }
}

const person = new Person('Joe', 'Freeman')
person.sayHello()



class Employee {
  constructor(person, company, wage) {
    this.person = person
    this.company = company
    this.wage = wage
    this.active = true
  }

  receiveRaise(amount) {
    this.wage += amount
    console.log(`Hi ${this.person.firstName} ${this.person.lastName}, here is your new wage ${this.wage}`)
  }
}

const employee = new Employee(person, 'apple', 250000)
employee.receiveRaise(7500)