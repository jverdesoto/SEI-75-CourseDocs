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

function Ship() {
    this.floats = true
    this.material = "steel"
    this.whatAmI = function () {
        console.log(`I am made of ${this.material}`)
    }
}

const myShip = new Ship();


// function Car(topSpeed, model, manufacturer, colour) {
//     const obj = {}
//     obj.topSpeed = topSpeed
//     obj.model = model
//     obj.manufacturer = manufacturer
//     obj.colour = colour
//     return obj
// }

// function Car(topSpeed, model, manufacturer, colour){
//     this.topSpeed = topSpeed
//     this.model = model
//     this.manufacturer = manufacturer
//     this.colour = colour
// }

// class Car {
//     constructor(topSpeed, model, manufacturer, colour){
//         this.topSpeed = topSpeed
//         this.model = model
//         this.manufacturer = manufacturer
//         this.colour = colour}
//     whatColourAmI() {
//         console.log(`I am ${this.colour}`);
//     }
// }
// const myCar = new Car(200, 'M3', 'BMW', 'green')
// const myCar2 = new Car(130, 'Polo', 'VW', 'black')

// console.log(myCar);
// console.log(myCar2.topSpeed);

// myCar.whatColourAmI();

class BankAccount {
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName
        this.balance = balance
        this.acctNum = acctNum
    }
    deposit(sum) {
        const newBalance = this.balance += sum
        return `You have successfully deposited $${sum}! Your current balance is: $${newBalance}`
    }

    withdraw(sum) {
        if(this.balance - sum >= 0){
            return this.balance -= sum
        } else {
            return `You do not have enough funds!`
        }
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled, overdraftLimit){
        super(ownerName, balance, acctNum)
        this.overdraftEnabled = overdraftEnabled
        this.overdraftLimit = overdraftLimit
    }

    withdraw(sum){
        // Getting a negative number for calculation and string purposes
        const startingOverdraftLimit = this.overdraftLimit * -1
        // Neating the code
        const remainingFunds = this.balance - sum
        const remainingOverdraftLimit = startingOverdraftLimit - remainingFunds
        if(remainingFunds < 0 && remainingFunds > startingOverdraftLimit && this.overdraftEnabled === true) {
            return `Your balance is negative. Current balance: -$${remainingOverdraftLimit * -1} `
        } else if (remainingFunds < 0 && this.overdraftEnabled === false) {
            return `Sorry! Your withdrawal could not be processed as you do not have an active Overdraft feature. 
                    Please top up your account! `
        }
            else if(remainingFunds < 0 && remainingFunds < startingOverdraftLimit && this.overdraftEnabled === true){
                return `Sorry! The amount you are trying to withdraw exceeds your Overdraft limit. Please try a smaller amount! Your current limit is $${startingOverdraftLimit * -1}`
        } else return `You have successfully withdrawn $${sum}! Your current balance is ${remainingFunds}`
    }
}

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance, acctNum) {
        super(ownerName, balance, acctNum)
    }
    withdraw(sum){
        return `Your $${sum} withdrawal has been declined. This feature is not currently available on a Savings Account! `
    }
}

const myBankAccount = new CheckingAccount('Stelian-Ionut', -20, '123456789', true, 100)
