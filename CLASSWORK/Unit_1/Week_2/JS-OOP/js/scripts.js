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
    constructor(ownerName,balance,acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    withdraw(){
        alert(`My name is ${this.ownerName} and my balance = ${this.balance}`);
        return this.balance;
    };
}

const bankAccount = new BankAccount('Heba Arafat',123,'7635426328372437');
bankAccount.withdraw();

class CheckingAccount extends BankAccount{
    constructor(ownerName,balance,acctNum){
        super(ownerName,balance,acctNum);
    }
}

const chickingAccount = new CheckingAccount('Noor Mohamed',55444,'7635426328372437');
chickingAccount.withdraw();

class SavingsAccount extends BankAccount{
    constructor(ownerName,balance,acctNum){
        super(ownerName,balance,acctNum);
    }
}

const savingsAccount = new SavingsAccount('Noor Mohamed',55444,'7635426328372437');
chickingAccount.withdraw();


/** Person O*/
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        alert(`Hello my name is ${this.firstName} ${this.lastName}`);
        return `Hello my name is ${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('Heba','Arafat');
person.sayHello();

class Employee extends Person{
    constructor(firstName, lastName, company, wage,active){
        super(firstName, lastName);
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

const employee = new Employee('Ali','Kamal' , 'Google',100,true);
employee.sayHello();

employee.receiveRaise(3000);
alert(`new wage = ${employee.wage}`);

class Manager extends Employee{
    constructor(firstName, lastName, company, wage, active){
        super(firstName, lastName, company, wage, active);
        this.department = '';
    }

    giveRaise(employee){
        this.receiveRaise(wage);
    }
}

const manager = new Manager('Jeo','Max' , 'Facebook',10000,true,'development');
manager.sayHello();

manager.receiveRaise(34000);
alert(`new wage = ${manager.wage}`);

class Worker extends Employee{
    constructor(firstName, lastName, company, wage,active, manager){
        super(firstName, lastName, company, wage,active);
        this.manager = new Manager(manager.firstName, manager.lastName, manager.company, manager.wage, manager.active,manager.department);
    }
}

const worker = new Worker('Noor','Mohamed' , 'Booking',20000,true,new Manager('Jeo','Max' , 'Facebook',10000,true,'development'));
worker.sayHello();
alert(` ${worker.firstName} maganer is ${worker.manager.firstName} ${worker.manager.lastName}`)
worker.receiveRaise(34000);
alert(`new wage = ${worker.wage}`);