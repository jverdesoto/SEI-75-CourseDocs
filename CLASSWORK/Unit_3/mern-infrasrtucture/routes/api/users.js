const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users
router.post('/login', usersCtrl.login)
// POST /api/users
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
// POST /api/users/login
router.post('/', usersCtrl.create);

module.exports = router