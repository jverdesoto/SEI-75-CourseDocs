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


// function Car(topSpeed, model, manufacturer, color){
//     const obj = {};
//     obj.topSpeed = topSpeed;
//     obj.model = model;
//     obj.manufacturer = manufacturer;
//     obj.color = color;
//     return obj;
// }

// function Car(topSpeed, model, manufacturer, color){
//     this.topSpeed = topSpeed;
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.color = color;
// }

// class Car{
//     constructor(topSpeed, model, manufacturer, color){
//         this.topSpeed = topSpeed;
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.color = color;
//     }

//     whatColorAmI(){
//         console.log(`I am ${this.color}`);
//     }
// }

// const myCar = new Car(200, 'M3', 'BMW','green');
// const myCar2 = new Car(130, 'Polo', 'VM','black');

// console.log(myCar.topSpeed);
// console.log(myCar2.topSpeed);

// myCar.whatColorAmI();
// myCar2.whatColorAmI();

// write my code there

class BankAccount{
    constructor(){
        this.ownerName = '';
        this.balance = 0;
        this.acctNum = '';
    }
    withdraw(){};
}

class CheckingAccount extends BankAccount{
    constructor(){
    }
    withdraw(){};
}

class SavingsAccount extends BankAccount{
    constructor(){
        // const bankaccount = new BankAccount();
    }
    withdraw(){};
}

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){}
}

class Employee extends Person{
    constructor(firstName, lastName, company, wage,active){
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.wage = wage;
        this.active = active;
    }

    receiveRaise (wage){
        this.wage = wage;
    }

    terminate(){
        this.active = false;
    }
}

class Manager extends Employee{
    constructor(){
        this.department = '';
    }

    giveRaise(employee){
        this.receiveRaise(wage);
    }
}

class Worker extends Employee{
    constructor(){
        this.manager = new Manager();
    }
}