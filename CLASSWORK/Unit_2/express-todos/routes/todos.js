var express = require('express');
var router = express.Router();

// All actual paths start with "/todos"

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

// GET /todos
router.get('/', todosCtrl.index);

module.exports = router;
