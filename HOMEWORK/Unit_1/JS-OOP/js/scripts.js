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

    - Data is encapsulated, contained within the scope
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

//FIRST WAY OF CREATING A CLASS
// function Car(topSpeed, model, manufacturer, color) {
//     const obj ={}
//     obj.topSpeed = topSpeed
//     obj.model = model
//     obj.manufacturer = manufacturer
//     obj.color = color
//     return obj
// }

// CREATING A CLASS USING THIS
// function Car(topSpeed, model, manufacturer, color) {
//     this.topSpeed = topSpeed
//         this.model = model
//         this.manufacturer = manufacturer
//         this.color = color
// }


//MODERN WAY OF CREATING A CLASS
// class Car {
//     constructor (topSpeed, model, manufacturer, color) {
//         this.topSpeed = topSpeed
//         this.model = model
//         this.manufacturer = manufacturer
//         this.color = color
//     }

//     whatColorAmI(){
//         console.log(`I am ${this.color}`)
//     }
// }


// const myCar = new Car(200, 'M3', 'BMW', 'green')
// const myCar2 = new Car(130, 'Polo', 'VW', 'black')

// myCar.whatColorAmI()
// myCar2.whatColorAmI()



//EXERCISE WITH SUPER
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    sayHello() {
        console.log(`Hi there! My name is ${this.firstName} ${this.lastName}`)
    }
}

    class Employee extends Person {
        constructor(firstName, lastName, company, wage) {
            super(firstName, lastName)
            this.company = company
            this.wage = parseInt(wage) 
            this.active = true
        }
        receiveRaise(amount) {
            this.wage += parseInt(amount)
        }
        terminate() {
            this.active = false
        }
    }

        class Manager extends Employee {
            constructor(firstName, lastName, company, wage, department) {
                super(firstName, lastName, company, wage)
                this.department = department
            }

            giveRaise(employee, amount){
                employee.receiveRaise(amount)
            }
        }

        class Worker extends Employee {
            constructor(firstName, lastName, company, wage, Manager) {
                super(firstName, lastName, company, wage)
                this.manager = Manager
            }

            evadeTaxes(amount){
                this.wage += parseInt(amount)
                setTimeout(() => {
                    this.terminate()   //couldn't get this bit to work oops
                }, 1000);
            }
        }

//testing
const myPerson = new Person('John', 'Smith')

const employee1 = new Employee('Jane', 'Doe','RedBull', '2000')
employee1.receiveRaise('325')

const manager1 = new Manager('Maria', 'James', 'RedBull', "3000", 'sales')
manager1.giveRaise(employee1, 500)

const worker1 = new Worker('Manuel', 'Costa', 'RedBull', 1000, manager1);
worker1.evadeTaxes('500')

// console.log(worker1.wage)
// console.log(worker1.active)


//EXERCISE WITHOUT SUPER

class BankAccount {
    constructor(ownerName, balance){
        this.ownerName = ownerName
        this.balance = parseInt(balance)
        this.acctNum = 52
    }

    deposit(amount){
        this.balance += parseInt(amount)
    }
    withdraw(amount){
        const remainderBalance = this.balance -= parseInt(amount)
        if (remainderBalance >= 0){
            this.balance -= parseInt(amount)
        }
        else {
            console.log(`Not enough funds. Your current balance is ${this.balance}.`)
        }
    }
}

class CheckingAccount {
    constructor(bankAccount){
        this.bankAccount = bankAccount
        this.overdraftEnabled = true
    }

    withdraw(amount) {
        const remainderBalance = this.balance -= parseInt(amount)
        const overdraftLimit = 1000
        if (remainderBalance <= overdraftLimit){
            console.log(`Not enough funds. Overdraft limit: ${overdraftLimit}`)
        }
    }
}

class SavingsAccount {
    constructor(bankAccount){
        this.bankAccount = bankAccount
    }

    withdraw(amount){
        console.log('Unable to withdraw from Savings Account')
    }
}

//testing
const johnRegularAccount = new BankAccount('John Doe', 1000)
const johnSavingsAccount = new SavingsAccount(johnRegularAccount)

johnRegularAccount.deposit('500')
console.log(johnRegularAccount.balance)
johnSavingsAccount.withdraw(300)
console.log(johnSavingsAccount.bankAccount.balance)







