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

//function Car(topSpeed, model, manufacturer, color) {
//    const obj = {}
//    obj.topSpeed = topSpeed
//    obj.model = model
//    obj.manufacturer = manufacturer
//    obj.color = color
//    return obj
//}

/*function Car(topSpeed, model, manufacturer, color) {
   this.topSpeed = topSpeed
   this.model = model
   this.manufacturer = manufacturer
   this.color = color
}*/

/*class Car {
    constructor(topSpeed, model, manufacturer, color){
        this.topSpeed = topSpeed
        this.model = model
        this.manufacturer = manufacturer
        this.color = color
    }
    whatColorAmI() {
        console.log(`I am ${this.color}`);
    }
}

const myCar = new Car(200, 'M3', 'BMW', 'green')
const myCar2 = new Car(130, 'Polo', 'VW', 'Black')

console.log(myCar.topSpeed);
console.log(myCar.topSpeed);

myCar.whatColorAmI()*/

class BankAccount {
    constructor(ownerName, balance, acctNum) {
      this.ownerName = ownerName
      this.balance = balance
      this.acctNum = acctNum
    }

    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: £${amount} into account: ${this.acctNum}.`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        this.balance -= amount;
        console.log(`Withdrawn: £${amount} from account: ${this.acctNum}.`);
      } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
      }
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
      super(ownerName, balance, acctNum,)
      this.overdraftEnabled = overdraftEnabled
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (this.overdraftEnabled || (amount <= this.balance)) {
          this.balance -= amount;
          console.log(`Withdrawn: £${amount} from checking account: ${this.acctNum}`);
        } else {
          console.log("Invalid withdrawal amount.");
            }
         }
    }
}
  
  class SavingsAccount extends BankAccount {
    withdraw(amount) {
      console.log("Withdrawals are not allowed from a savings account.");
    }
  }
  
  const johnChecking = new CheckingAccount("John", 0, 275425, true);
  const MariaSavings = new SavingsAccount("Maria", 2000, 216458);
  
  johnChecking.deposit(1000); //should give £1000 balance
  johnChecking.withdraw(1500); // should give £-500 bc overdraft enabled
  MariaSavings.deposit(500); // should give £2500 balance
  MariaSavings.withdraw(100); // should decline bc withdrawals disabled in savings
  