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
    getBooks
}

async function getBooks(req,res){
    const filter = {};
    console.log(`Get All Books`);
    let books = await Book.find(filter)
    console.log(JSON.stringify(books));
    return res.json(books);
}


async function saveBook(req, res){
    app.post('/books/add',async (req,res)=>{
    
        console.log(req.body)
        let reqName = req.body.name;
        let reqAge = req.body.age;
        console.log(`name = ${reqName} : ${reqAge}`)
        
        const catObj = new Cat({ name: reqName, age: parseInt(reqAge) });
        await catObj.save()
        .then((cat) => {
            res.sendStatus(200);
            console.log(JSON.stringify(cat));
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    });
}
