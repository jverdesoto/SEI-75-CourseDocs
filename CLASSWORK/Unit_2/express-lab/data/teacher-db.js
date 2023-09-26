let teachers = [
    { id: 1, name: 'Javi', age: 40, subject: 'Physics', funFact: 'Enjoys Java' },
    { id: 2, name: 'Joe', age: 42, subject: 'Mathematics', funFact: 'Has climbed Mount Everest' },
    { id: 3, name: 'Andy', age: 44, subject: 'Computer Science', funFact: 'Is a video game enthusiast' },
    { id: 4, name: 'Luke', age: 46, subject: 'History', funFact: 'Likes astronomy' },
];
  
  module.exports = {
    getOneById: function(id) {
        const result = teachers.find(teacher => teacher.id === parseInt(id));
        if (!result) {
          console.log("No teacher found with this ID");
        }
        return result;
      },
      getOneByName: function(name) {
        const result = teachers.find(teacher => teacher.name.toLowerCase() === name.toLowerCase());
        if (!result) {
          console.log("No teacher found with this name");
        }
        return result;
      }
      
  };
  