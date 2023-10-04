import 'dotenv/config'
import mongoose from "mongoose";
import Book from '../models/bookModel.js';
import authorsController from './authors.js'

mongoose.connect(`${process.env.DATABAE_URL}`);

export default {
    saveBook,
    getBooks,
    getAuthorBooks,
    getBookById,
    deleteBook,
    updateBook
}

async function getBooks(req,res){
    const filter = {};
    // console.log(`Get All Books`);
    let books = await Book.find(filter)
    // console.log(JSON.stringify(books));
    return res.json(books);
}


// get all books for an author
async function getAuthorBooks(req,res){
    const filter = {"author": req.params.id};
    // console.log(`Get Author Books`);
    let books = await Book.find(filter)
    // console.log(JSON.stringify(books));
    return res.json(books);
}

// get a book details
async function getBookById(req,res){
    // console.log(`Book Id : ` + req.params.id);
    const filter = {_id: `${req.params.id}`};
    // console.log(`A Book`);
    let book = await Book.findOne(filter)
    // console.log(JSON.stringify(book));
    return res.json(book);
}

async function saveBook(req, res){
    // TODO fix this issue
    // expected id '651b32ad56a4c7ac494212b5'
    // const authorObj = await authorsController.getAuthorByName(req,res);
    // console.log(`authorObj id for book = ${JSON.parse(authorObj).stringify()}`)
    // if(authorObj === null) 
    // {
    //     // TODO save the author
    // }
    // /{"title":"the secret","description":"ihdeiudheidbe","publishedDate":"04/10/2023","authorName":"JAke"}
    const newBook = new Book({
        title: req.body.title,
        description: req.body.description,
        publishedDate: req.body.publishedDate,
        author: '651b32ad56a4c7ac494212b5'//'authorObj._id'
    })

    console.log(`new book Object = ${JSON.stringify(newBook)}`)
    
    await newBook.save()
    .then((newBook) => {
        res.sendStatus(200);
        console.log(JSON.stringify(newBook));
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });

}

// delete book from database
async function deleteBook(req, res){
    console.log(`Book Id : ` + req.params.id);
    const filter = {"_id": `${req.params.id}`};
    console.log(`A Book`);
    Book.deleteOne(filter).then(()=>{
        console.log('Delete Book')
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Delete Book Error')
        console.log(error);
        res.sendStatus(500);
    });
}

// update an existing  book  title and published date
async function updateBook(req, res){
    console.log(`Book Id : ` + req.params.id);
    const filter = {_id: `${req.params.id}`};
    console.log(`A Book`);

    Book.updateOne(filter, {
        title: req.body.title,
        publishedDate: req.body.publishedDate
    }).then(()=>{
        console.log('Update Book')
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Update Book Error')
        console.log(error);
        res.sendStatus(500);
    });
}


