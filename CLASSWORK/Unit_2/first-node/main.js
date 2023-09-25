const fs = require('fs');

fs.writeFile(
    './hello.txt', 
    'Hello!', 
    function() {
  console.log('done creating file');
});


const daysOfWeek = require('./days-of-week')[1];
console.log(daysOfWeek);

const daysOfWeek = require('./days-of-week');

const day = daysOfWeek.getWeekday(5);
console.log(day);


const random = require('./random');  // Import the function from random.js

for (let i = 0; i < 10; i++) {
  console.log(random(100, 200));  // Call the function and log the result
}


const circle = require('./circle');

console.log(circle.area(50));  
console.log(circle.circumference(75));  
