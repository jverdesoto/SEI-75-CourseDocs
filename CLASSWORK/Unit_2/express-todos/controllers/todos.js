// Import the Todo model
const Todo = require('../models/todo');

// Export an object containing all controller actions
module.exports = {
  index
};

// Define the index action
function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}
