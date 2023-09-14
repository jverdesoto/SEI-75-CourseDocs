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

    // function Car(topSpeed, model, manufacturer, color) {
    //     const obj = {}
    //     obj.topSpeed = topSpeed
    //     obj.model = model
    //     obj.manufacturer = manufacturer
    //     obj.color = color
    //     return obj
    // }
    // class Car {
    //     constructor(topSpeed, model, manufacturer, color){
    //     this.topSpeed = topSpeed
    //     this.model = model
    //     this.manufacturer = manufacturer
    //     this.color = color
    //     }
    //     whatColorAmI() {
    //         console.log(`I am ${this.color}`);
    //     }
    // }
    // const myCar = new Car(200, 'M3', 'BMW', 'Green')
    // const myCar2 = new Car(130, 'Polo', 'VW', 'Black')


    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }
        saysHello() {
            console.log(`Hello ${this.firstName} ${this.lastName}`)
        }
    }
    class Employee extends Person {
        constructor(firstName, lastName, company, wage, active) {
            super(firstName, lastName)
            this.company = company
            this.wage = wage
            this.active = true
        }
        receiveRaise(amount) {
            this.wage += amount
            return `${this.firstName} ${this.lastName} received a raise. New wage: $${this.wage}`;
        }
    

    terminate() {
        this.active = false;
    }
}
 class Manager extends Employee{
        constructor(firstName, lastName, company, wage, active, department) {
            super(firstName, lastName, company, wage,active);
            this.department = department;
             }
            
        
            giveRaise(employee, amount) {
                if (employee.active) {
                  return employee.receiveRaise(amount);
                } else {
                  return `${employee.firstName} ${employee.lastName} is no longer active.`;
                }
              }
            }
        

    class Worker extends Employee{
        constructor(firstName, lastName, company, wage, active, department, manager) {
            super(firstName, lastName, company,active, wage,)
            this.manager = manager
        }
        performTask(task) {
            return `${this.firstName} ${this.lastName} is performing the task: ${task}`;
          }
        }
        
    
    
    
    
    
    const myPerson = new Person('Jeeivan', 'Sri', true)
    myPerson.saysHello()

    const myPerson2 = new Employee('Elliot', 'Lewis')
    myPerson2.saysHello()