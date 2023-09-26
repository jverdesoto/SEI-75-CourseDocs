var express = require('express');
var router = express.Router();


module.exports = router;
const allPosts = require('../posts'); 

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Blog', posts: allPosts });
});
