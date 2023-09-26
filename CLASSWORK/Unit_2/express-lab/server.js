const express = require('express');
const bodyParser = require('body-parser');
const studentDb = require('./data/student-db');
const teacherDb = require('./data/teacher-db');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// View Engine
app.set('view engine', 'ejs');

// Routes

// Handle search form submission
app.get('/search', (req, res) => {
    const query = req.query.query;
    const type = req.query.type;
    let student = null;
    let teacher = null;

    if (type === 'student') {
        // Find student by name
        student = studentDb.getOneByName(query);
    } else if (type === 'teacher') {
        // Find teacher by name
        teacher = teacherDb.getOneByName(query);
    }

    res.render('index', { student, teacher });
});


app.get('/', (req, res) => {
    // Fetch student and teacher data here
    const student = null; // or get the student from the database
    const teacher = null; // or get the teacher from the database

    res.render('index', { student, teacher });
});

// Search for student by ID
app.get('/students/:id', function (req, res) {
  const student = studentDb.getOneById(req.params.id);
  res.render('index', { student });
});

// Search for student by name
app.get('/students/name/:name', function (req, res) {
  const student = studentDb.getOneByName(req.params.name);
  res.render('index', { student });
});

// Search for teacher by ID
app.get('/teachers/:id', function (req, res) {
  const teacher = teacherDb.getOneById(req.params.id);
  res.render('index', { teacher });
});

// Search for teacher by name
app.get('/teachers/name/:name', function (req, res) {
  const teacher = teacherDb.getOneByName(req.params.name);
  res.render('index', { teacher });
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
