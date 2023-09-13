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
