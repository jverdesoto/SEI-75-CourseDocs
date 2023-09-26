//LOAD EXPRESS
const { log } = require('console')
const express = require('express')
const path = require('path')

//require to do database

const todoDb = require('./data/todo-db')
//CREATING EXPRESS APP
const app = express()

//CONFIGURING THE EXPRESS APP
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



app.get('/', function(req, res) {
    //PATH MUST START WITH A LEADING SLASH
    res.redirect('/todos')
})
app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/todos', function(req, res) {
    const todos = todoDb.getAll()
    res.render('todos/index', { todos })
})

app.listen(3000, function() {
    console.log('listening on port 3000');
})