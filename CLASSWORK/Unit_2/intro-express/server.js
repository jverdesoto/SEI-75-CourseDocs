const express = require('express');
const bodyParser = require('body-parser');
const todoDb = require('./data/todo-db');
const app = express();
let viewCount = 0;


// Middleware for logging
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });

app.use(bodyParser.urlencoded({ extended: true }));

// Initialize to-do list array with objects
let todoList = [];

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Route for the home page
app.get('/', (req, res) => {
    viewCount++;
    const todoList = todoDb.getAll(); // Fetch all todos from the database
    res.render('index', { todoList, viewCount }); // Pass them to the EJS template
  });
  
  
  app.post('/add-todo', (req, res) => {
    const newItem = { text: req.body.newTodo, done: false };
    todoDb.add(newItem);  // Add the new item to the database
    res.redirect('/');
  });
// Route for adding a new item
app.post('/add-todo', (req, res) => {
  const newItem = { text: req.body.newItem, done: false };
  todoList.push(newItem);
  res.redirect('/');
});

// POST Route for adding a new to-do item
app.post('/add-todo', (req, res) => {
    const newItem = { text: req.body.newTodo, done: false };
    todoDb.add(newItem);  // Using todoDb to add the new item
    res.redirect('/');
  });

// Route for toggling an item's done status
app.post('/toggle-done', (req, res) => {
  const index = req.body.index;
  todoList[index].done = !todoList[index].done;
  res.redirect('/');
});

// Route for deleting an item
app.post('/delete-item', (req, res) => {
  const index = req.body.index;
  todoList.splice(index, 1);
  res.redirect('/');
});

// POST Route for deleting a to-do item
app.post('/delete', (req, res) => {
    const index = req.body.index;
    todoList.splice(index, 1);
    res.redirect('/');
  });

  // POST Route for toggling a to-do item
app.post('/toggle', (req, res) => {
  const index = req.body.index;
  todoList[index].done = !todoList[index].done;
  res.redirect('/');
});

// // viewcount
// app.get('/', function(req, res) {
//   viewCount++;
//   res.render('index', { viewCount: viewCount });
// });


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
