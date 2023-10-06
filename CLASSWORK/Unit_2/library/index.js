import 'dotenv/config'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from 'node-fetch';
import mongoose from "mongoose";
import booksController from './controllers/books.js'
import authorsController from './controllers/authors.js'
import cookieParser from 'cookie-parser';
import session from "express-session"
import userController from './controllers/users.js'

mongoose.connect(`${process.env.DATABAE_URL}`);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
})

app.get('/',async (req,res)=>{
    console.log("Library home page");
    res.redirect('/books');
});

// saved loggedin user
app.post('/user/login',async(req, res) => {
    // console.log("Start saving user data");
    const email = req.body.email;
    const name = "Heba"//req.body.given_name;
    let status = await userController.saveUser(email, name);
    res.sendStatus(status);
}) 


/**   Books requests  */

// get all boks from database
app.get('/books',async (req,res)=>{
    booksController.getBooks(req,res);
});

// get a book details
app.get('/books/:id',async (req,res)=>{
    booksController.getBookById(req,res);
});

// saved book
app.post('/books/add',async (req,res)=>{ 
    console.log(`noode book Object = ${JSON.stringify(req.body)}`)
    booksController.saveBook(req, res);
});

// delete book from database
app.delete('/books/:id',async (req,res)=>{
    booksController.deleteBook(req,res);
});

// delete book from database
app.put('/books/:id',async (req,res)=>{
    booksController.updateBook(req,res);
});
/**   Author requests  */

// get all boks from database
app.get('/authors',async (req,res)=>{
    authorsController.getAuthors(req,res);
});

// get an author details
app.get('/authors/:id',async (req,res)=>{
    authorsController.getAuthorById(req,res);
});

// get an author's books
app.get('/authors/:id/books',async (req,res)=>{
    booksController.getAuthorBooks(req, res);
});




