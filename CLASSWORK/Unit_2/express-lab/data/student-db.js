let students = [
    { id: 1, name: 'Aisha', age: 21, degree: 'Computer Science', funFact: 'Loves skydiving' },
    { id: 2, name: 'Ashkan', age: 22, degree: 'Biology', funFact: 'Plays the violin' },
    { id: 3, name: 'Baz', age: 23, degree: 'Chemistry', funFact: 'Enjoys hiking' },
    { id: 4, name: 'Ivan', age: 24, degree: 'Mathematics', funFact: 'Has a pet snake' },
    { id: 5, name: 'Jake', age: 25, degree: 'English Literature', funFact: 'Writes poetry' },
    { id: 6, name: 'Jeeivan', age: 26, degree: 'Physics', funFact: 'Loves to cook' },
    { id: 7, name: 'Matt', age: 27, degree: 'Psychology', funFact: 'Is a chess champion' },
    { id: 8, name: 'Paris', age: 28, degree: 'Environmental Conservation', funFact: 'Is vegan' },
    { id: 9, name: 'Rick', age: 29, degree: 'Art History', funFact: 'Collects huel bottles' },
    { id: 10, name: 'Sofia', age: 30, degree: 'Medicine', funFact: 'Loves Animal Crossing' },
    { id: 11, name: 'Stelian-Ionut', age: 31, degree: 'History', funFact: 'Is a history buff' },
    { id: 12, name: 'Tim', age: 32, degree: 'Teaching', funFact: 'Plays the guitar' },
    { id: 13, name: 'Elliot', age: 33, degree: 'Political Science', funFact: 'Has run a marathon' },
    { id: 14, name: 'Ramsay', age: 34, degree: 'Culinary Arts', funFact: 'Is a foodie' },
    { id: 15, name: 'Adriana', age: 35, degree: 'Fashion Design', funFact: 'Loves to travel' },
];
  
  module.exports = {
    getOneById: function(id) {
      return students.find(student => student.id === parseInt(id));
    },
    getOneByName: function(name) {
      return students.find(student => student.name.toLowerCase() === name.toLowerCase());
    },
  };
  