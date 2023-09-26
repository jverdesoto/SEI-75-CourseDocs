//load express
const express = require('express');
const path = require('path');

//require the todo database
const todoDb = require('./data/todo-db')

// create out express app
const app = express();

//configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//mount middleware (app.use)

// Define a "root" route directly on app
// next lesson, we'll use best practice routing
//req = reques res = respond
app.get('/', function(req, res) {
    // path MUST start with a leading slash
    res.redirect('/todos');
});

// app.get('/home', function(req, res) {
//     res.send('<h1>home page!</h1>');
// });

app.get('/home', function(req, res) {
    //never begin the name of the templet with a foward slash
    res.render('home');
});

app.get('/todos', function(req, res) {
  res.render('todos/index', {
    todos: todoDb.getAll()
  });
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listening on port 3000');
});



