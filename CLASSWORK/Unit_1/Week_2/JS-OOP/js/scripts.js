// Object-oriented Javascript
/*
    - OOP: Using OBJECTS to represent real world things.
    - Objects have own properties and functions (methids)
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

const myString = 'hello'

console.log(myString.charAt(0));
console.log(myString.valueOf());


const myObj = {}

console.log(myObj);

function Car(topSpeed, model, manufacturer, color) {
    const obj = {}
  obj.topSpeed = topSpeed
  obj.model = model
  obj.manufacturer = manifacturer
  obj.color = color
  return obj
  }
  
  //instance of a car
  const myCar() = new Car(200, 'M3', 'BMW', 'green')
  const myCar2 = new Car(130, 'polo', 'VW', 'black')
  console.log(myCar)
  console.log(myCar.topSpeed)
  console.log(myCar2.topSpeed)
  
  //this will return it by defautl you dont need to create
  function Car(topSpeed, model, manufacturer, color) {
    this.topSpeed = topSpeed
    this.model = model
    this.manufacturer = manufacturer
    this.color = color
  }
  
  class Car {
    constructor(topSpeed, model, manufacturer, color){
      this.topSpeed = topSpeed
      this.model = model
      this.manufacturer = manufacturer
      this.color = color
  }
  whatColorAmI() {
    console.log(`I am ${this.color}`)
  }
  }
  myCar.whaColorAmI()
  mycar2.whatColorAmI
  
  //if you use class method you need to first declare the class then the instances