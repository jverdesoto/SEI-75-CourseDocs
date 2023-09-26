const express = require('express');
const path = require('path');
const studentIds = require('./views/students/student-list')

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/', function (req, res) {
    res.redirect('/home');
  });

  app.get('/home', function (req, res) {
    res.render('home', {
        students: studentIds.getAll()
    });
});
  app.get('/students', function(req, res) {
    res.render('students/index', {
        students: studentIds.getAll()
    });
  })

  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });