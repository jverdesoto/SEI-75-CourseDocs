const express = require('express')
const path = require('path')

const studentsDb = require('./data/studentsDb')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res){
    res.redirect('/students')
})

app.get('/students', function(req, res) {
    const students = studentsDb.getAll()
    res.render('students/index', { students })
})

app.listen(3000, function() {
    console.log('listening to port 3000');
})