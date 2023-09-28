//The simplest way to make a Class function

// function Car(topSpeed, model, manufacturer, color) {
//   const obj = {};
//   obj.topSpeed = topSpeed;
//   obj.model = model;
//   obj.manufacturer = manufacturer;
//   obj.color = color;
//   return obj;
// }

//Now we can use the this keyword to shorten the function
// function Car(topSpeed, model, manufacturer, color) {
//   this.topSpeed = topSpeed;
//   this.model = model;
//   this.manufacturer = manufacturer;
//   this.color = color;
// }

// class Car {
//   constructor(topSpeed, model, manufacturer, color) {
//     this.topSpeed = topSpeed;
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.color = color;
//   }
//   whatColorAmI() {
//     console.log(`I am ${this.color}`);
//   }
// }

// const myCar = new Car(200, "M3", "BMW", "green");
// const myCar2 = new Car(130, "Polo", "VW", "black");

// console.log(myCar.whatColorAmI());
// console.log(myCar2.topSpeed);

//BANK ACCOUNT

class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }
  deposit(val) {
    this.balance += val;
  }
  withdraw(val) {
    this.balance -= val;
  }
}

class CheckingAccount {
  constructor(bankAccount, overdraftEnabled) {
    this.bankAccount = bankAccount;
    this.overdraftEnabled = overdraftEnabled;
  }
  withdraw(val) {
    this.balance -= val * 2;
  }
}

class SavingsAccount {
  constructor(bankAccount) {
    this.bankAccount = bankAccount;
  }
  withdraw(val) {
    return "Withdrawal disallowed!";
  }
}

//testing
//Bank Account Class
const myBankAccount = new BankAccount("Jake", 10, 123456789);
console.log(myBankAccount.balance);

//Checking Account Class
const myCheckingAccount = new CheckingAccount(myBankAccount, true);
console.log(
  myCheckingAccount.bankAccount.balance,
  myCheckingAccount.overdraftEnabled
);

//Savings account class
const mySavingsAccount = new SavingsAccount(
  new BankAccount("Jake", 100, 564738291)
);
console.log(
  mySavingsAccount.withdraw(10),
  mySavingsAccount.bankAccount.balance
);

//PERSON

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log("Hello");
  }
}

const person = new Person("Jake", "Phillips");

class Employee {
  constructor(person, company, wage) {
    this.person = person;
    this.company = company;
    this.wage = wage;
    this.active = true;
  }

  recieveRaise(newWage) {
    this.wage = newWage;
  }
  terminate() {
    this.active = false;
  }
}

const newEmployee = new Employee(person, "google", "$50000");

class Manager {
  constructor(employee, department) {
    this.employee = employee;
    this.department = department;
  }
  giveRaise(employee) {
    this.employee.recieveRaise(employee);
  }
}

const newManager = new Manager(newEmployee, "development");

class Worker {
  constructor(employee, manager) {
    this.employee = employee;
    this.manager = manager;
  }
}

const newWorker = new Worker(newEmployee, newManager);

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
