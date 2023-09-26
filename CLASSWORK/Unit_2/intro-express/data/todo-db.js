const fs = require('fs');
const path = require('path');

const todosFilePath = path.join(__dirname, 'todos.json');

let todos;

// Function to write todos to file
function writeToFile() {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
}

// Function to read todos from file
function readFromFile() {
  try {
    const data = fs.readFileSync(todosFilePath, 'utf-8');
    todos = JSON.parse(data);
  } catch (error) {
    todos = [];
  }
}

// Initialise by reading from file
readFromFile();

module.exports = {
  getAll: function () {
    return todos;
  },
  add: function (newTodo) {
    todos.push(newTodo);
    writeToFile();
  },
};


  