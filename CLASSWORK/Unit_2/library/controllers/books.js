import 'dotenv/config'
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from 'node-fetch';
import mongoose from "mongoose";
import Book from '../models/bookModel.js';

mongoose.connect(`${process.env.DATABAE_URL}`);

export default {
    saveBook,
    getBooks,
    getAuthorBooks,
    getBookById
}

async function getBooks(req,res){
    const filter = {};
    console.log(`Get All Books`);
    let books = await Book.find(filter)
    console.log(JSON.stringify(books));
    return res.json(books);
}


// get all books for an author
async function getAuthorBooks(req,res){
    const filter = {"author": req.params.id};
    console.log(`Get Author Books`);
    let books = await Book.find(filter)
    console.log(JSON.stringify(books));
    return res.json(books);
}

// get a book details
async function getBookById(req,res){
    console.log(`Book Id : ` + req.params.id);
    const filter = {_id: `${req.params.id}`};
    console.log(`A Book`);
    let book = await Book.findOne(filter)
    console.log(JSON.stringify(book));
    return res.json(book);
}

async function saveBook(req, res){
    console.log(`created book Object = ${JSON.stringify(req.body)}`)
    // const data = JSON.parse(req.body);
    // const bookOject = new Book('book',data);

    // await bookOject.save()
    // .then((bookOject) => {
    //     res.sendStatus(200);
    //     console.log(JSON.stringify(bookOject));
    // })
    // .catch((error) => {
    //     console.log(error);
    //     res.sendStatus(500);
    // });

}
