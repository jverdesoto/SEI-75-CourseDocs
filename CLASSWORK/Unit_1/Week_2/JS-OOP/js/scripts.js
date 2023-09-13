// Object-oriented Javascript
/*
    - OOP: Using OBJECTS to represent real world things.
    - Objects hace own properties and functions (methids)
    - Objects contain data and methods to represent info about what you're trying to model
    ex: 
    

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
// }
// const myShip = new Ship()

// console.log(myShip.floats);
// Define the BankAccount class

// Class lab
class bankAccount {
  // Constructor to initialise properties
  constructor(ownerName, balance) {
    this.ownerName = ownerName; // Set the owner's name
    this.balance = balance; // Set the initial balance
    this.acctNum = Math.floor(Math.random() * 1000000); // Generate a random account number
  }

  // deposit money into the account
  deposit(amount) {
    this.balance += amount; // add deposit to balance
  }

  // withdraw money from account
  withdraw(amount) {
    if (this.balance >= amount) { // check sufficient funds
      this.balance -= amount; // minus withdrawal amount
    } else {
      console.log('Insufficient funds'); // log a message if insufficient
    }
  }
}

// checkingAccount class, derived from bankAccount
class checkingAccount extends bankAccount {
  // initialise and enable overdraft
  constructor(ownerName, balance, overdraftEnabled = false) {
    super(ownerName, balance); // call constructor of the parent class
    this.overdraftEnabled = overdraftEnabled; // set overdraft
  }

  // override withdraw method/ do overdraft feature
  withdraw(amount) {
    if (this.balance >= amount || this.overdraftEnabled) { // check sufficient funds or overdraft enabled
      this.balance -= amount; // - the withdrawal amount
    } else {
      console.log('Insufficient funds'); // log a message if insufficient
    }
  }
}

// savingsAccount class, derived from bankAccount
class savingsAccount extends bankAccount {
  constructor(ownerName, balance) {
    super(ownerName, balance); // call the constructor of the parent class
  }

  // override the withdraw and disallow withdrawals
  withdraw(amount) {
    console.log("You can't withdraw from a savings account :'("); 
  }
}
