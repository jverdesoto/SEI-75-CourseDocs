//*LOADING EXPRESS AND DB
const express = require('express')
const path = require('path')
const postsDB = require('./data/posts-db')

//*CREATING THE APP AND SETTINGS
const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.listen(3000, function() {
    console.log('listening on port 3000');
})

//*ROUTING 
app.get('/', function(req, res){
    res.redirect('/posts')
})
app.get('/posts', function(req, res) {
    const posts = postsDB.getAll()
    res.render('posts/index', { posts })
})